const FormHelper = require("../helper/FormHelper");
const { deleteFile } = require("../middlewares/cloudinaryUpload");
const { Intro, About, Project, Contact, Experience, Services, Skill, Testimonial } = require("../models/portfolioModel");



exports.portfolioDataGet = async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const testimonials = await Testimonial.find();
    const skills = await Skill.find();
    const services = await Services.find();

    res.status(200).send({
      intro: intros,
      about: abouts[0],
      projects: projects[0],
      contact: contacts[0],
      experiences: experiences[0],
      testimonials: testimonials[0],
      skills: skills[0],
      services: services[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.createIntro = async (req, res) => {
  try {
    const { welcomeText, firstName, lastName, designation, description, social } = req.body;

    if (!firstName || !lastName) {
      return res.status(400).json({
        error: 'First name and last name are required.',
      });
    }

    const { file, image } = req.body;

    const fileData = {
      public_id: req?.body?.file?.file_id,
      secure_url: req?.body?.file?.file_url,
    };
    const imageData = {
      public_id: req?.body?.image?.image_id,
      secure_url: req?.body?.image?.image_url,
    };

    const introData = {
      welcomeText,
      firstName,
      lastName,
      designation,
      description,
      social,
      file : fileData,
      image: imageData,
    };

    const newIntro = new Intro(introData);

    await newIntro.save();

    res.json({ message: 'Intro created successfully', intro: newIntro });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// Update
exports.updateIntro = async (req, res) => {
  try {
    const { welcomeText, firstName, lastName, designation, description, social, imageId, fileId } = req.body;
    const aboutId = req.params.id;

    let intro = await Intro.findById(aboutId);
    console.log('intro', intro)
    if (!intro) {
      return res.status(404).json({ error: 'About not found' });
    }

    intro.welcomeText = welcomeText || intro.welcomeText;
    intro.firstName = firstName || intro.firstName;
    intro.lastName = lastName || intro.lastName;
    intro.designation = designation || intro.designation;
    intro.description = description || intro.description;

    if (social) {
            intro.social.facebook = social.facebook || intro.social.facebook;
            intro.social.linkedin = social.linkedin || intro.social.linkedin;
            intro.social.github = social.github || intro.social.github;
          }

    if (imageId) {
      await deleteFile(intro.image.public_id);
      intro.image = {
        public_id: req?.body?.image?.image_id,
        secure_url: req?.body?.image?.image_url,
      };
    }
    if (fileId) {
      await deleteFile(intro.file.public_id);
      intro.file = {
        public_id: req?.body?.file?.file_id,
        secure_url: req?.body?.file?.file_url,
      };
    }

    await intro.save();

    res.json({ message: 'About updated successfully', intro });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// Delete Intro
exports.deleteIntro = async (req, res) => {
  try {
    const introId = req.params.id;

    const deletedIntro = await Intro.findByIdAndDelete(introId);

    if (!deletedIntro) {
      return res.status(404).json({ error: 'Intro not found' });
    }

    // Delete associated image file
    await deleteFile(deletedIntro.image.public_id);
    await deleteFile(deletedIntro.file.public_id);

    res.json({ message: 'Intro deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// ======================================portfolio===============================================
exports.createProject = async (req, res) => {
  try {
    const { title, technology, type , liveLink, githubClient, description, social , githubServer   } = req.body;

    const thumbnail = {
      public_id: req?.body?.thumbnail?.thumbnail_id,
      secure_url: req?.body?.thumbnail?.thumbnail_url,
    };

    const imageFiles = req?.body?.images
    const imageArray = imageFiles.map((image) => ({
      public_id: image?.images_id,
      secure_url: image?.images_url,
    }));

    console.log('imageFiles', imageFiles); 

    const projectData = {
      title,
      technology,
      type,
      liveLink,
      githubClient,
      description,
      social,
      githubServer,
      thumbnail,
      images: imageArray,
    };

    const newProject = new Project(projectData);

    await newProject.save();

    res.json({ message: 'Project created successfully', intro: newProject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// update

exports.updateProject = async (req, res) => {
  try {
    const { title, technology, type, liveLink, githubClient, description, social, githubServer, thumbnailId, imagesId } = req.body;
    const projectId = req.params.id;
    console.log('thumbnailId', thumbnailId);
    console.log('imagesId', imagesId);

    let project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    project.title = title || project.title;
    project.technology = technology || project.technology;
    project.type = type || project.type;
    project.liveLink = liveLink || project.liveLink;
    project.githubClient = githubClient || project.githubClient;
    project.description = description || project.description;
    project.social = social || project.social;
    project.githubServer = githubServer || project.githubServer;

    if (thumbnailId) {
      await deleteFile(project.thumbnail.public_id);
      project.thumbnail = {
        public_id: req?.body?.thumbnail?.thumbnail_id,
        secure_url: req?.body?.thumbnail?.thumbnail_url,
      };
    }
    if (imagesId) {
      for (const image of project.images) {
        await deleteFile(image?.public_id);
      }
      project.images = req?.body?.images?.map((image) => ({
        public_id: image?.images_id || null,
        secure_url: image?.images_url || null,
      })) || [];
    }
    if (req.body.images) {
      const imageFiles = req?.body?.images;
      const imageArray = imageFiles.map((image) => ({
        public_id: image?.images_id,
        secure_url: image?.images_url,
      }));
    
      project.images = [...project.images, ...imageArray];
    }

    await project.save();

    res.json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// delete
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Delete associated image files
    for (const image of deletedProject.images) {
      await deleteFile(image.public_id);
    }
    await deleteFile(deletedProject.thumbnail.public_id);

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};


// exports.deleteProject = async (req, res) => {
//   try {
//     const projectId = req.params.id;

//     const deletedProject = await Project.findByIdAndDelete(projectId);

//     if (!deletedProject) {
//       return res.status(404).json({ error: 'Project not found' });
//     }

//     // Delete associated image file
//     await deleteFile(deletedProject.images.public_id);
//     await deleteFile(deletedProject.thumbnail.public_id);

//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Internal server error', error });
//   }
// };

// ========================About==============================================
exports.createAbout = async (req, res) => {
  try {
    const { welcomeText, title, description } = req.body;
    const filename = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };
    const newAbout = new About({ welcomeText, title, description, image: filename, });

    await newAbout.save();

    res.json({ message: 'About created successfully', about: newAbout });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' , error});
  }
};

// Update about
exports.updateAbout = async (req, res) => {
  try {
    const { welcomeText, title, description , publicId } = req.body;
    const aboutId = req.params.id;

    let about = await About.findById(aboutId);
    if (!about) {
      return res.status(404).json({ error: 'About not found' });
    }

    about.welcomeText = welcomeText || about.welcomeText;
    about.title = title || about.title;
    about.description = description || about.description;

    if (publicId) {
      await deleteFile(about.image.public_id);
      about.image = {
        public_id: req?.file?.cloudinaryId,
        secure_url: req?.file?.cloudinaryUrl,
      };
    }

    await about.save();

    res.json({ message: 'About updated successfully', about });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// Delete About
exports.deleteAbout = async (req, res) => {
  try {
    const aboutId = req.params.id;

    const deletedAbout = await About.findByIdAndDelete(aboutId);

    if (!deletedAbout) {
      return res.status(404).json({ error: 'About not found' });
    }

    // Delete associated image file
    await deleteFile(deletedAbout.image.public_id);

    res.json({ message: 'About deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// ========================Services============================================
exports.createService = async (req, res) => {
  try {
    const { serviceName, description } = req.body;
    const image = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };
    const newServices = new Services({ serviceName , description, image, });

    await newServices.save();

    res.json({ message: 'Service created successfully', service: newServices });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' , error});
  }
};

exports.updateService = async (req, res) => {
  try {
    const { serviceName, description , imageId } = req.body;
    const serviceId = req.params.id;

    let service = await Services.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'About not found' });
    }

    service.serviceName = serviceName || service.serviceName;
    service.description = description || service.description;

    if (imageId) {
      await deleteFile(service.image.public_id);
      service.image = {
        public_id: req?.file?.cloudinaryId,
        secure_url: req?.file?.cloudinaryUrl,
      };
    }

    await service.save();

    res.json({ message: 'Service updated successfully', service });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;

    const deleteServices = await Services.findByIdAndDelete(serviceId);

    if (!deleteServices) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Delete associated image file
    await deleteFile(deleteServices.image.public_id);

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};


// ========================Skills===============================================
exports.createSkill = async (req, res) => {
  try {
    const { technicalSkills, professionalSkills } = req.body;
    
    const newSkill = new Skill({ technicalSkills, professionalSkills });

    await newSkill.save();

    res.json({ message: 'Skill created successfully', skill: newSkill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const { technicalSkills, professionalSkills } = req.body;
    const skillId = req.params.id;

    const updatedSkill = await Skill.findByIdAndUpdate(
      skillId,
      { technicalSkills, professionalSkills },
      { new: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.json({ message: 'Skill updated successfully', skill: updatedSkill });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.id;

    const deletedSkill = await Skill.findByIdAndDelete(skillId);

    if (!deletedSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// =======================Create a new experience===============================
exports.createExperience = async (req, res) => {
  try {
    const { experiences } = req.body;

    const newExperience = new Experience({ experiences });

    await newExperience.save();

    res.json({ message: 'Experience created successfully', experience: newExperience });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const { experiences } = req.body;
    const experienceId = req.params.id;

    const updatedExperience = await Experience.findByIdAndUpdate(
      experienceId,
      { experiences },
      { new: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.json({ message: 'Experience updated successfully', experience: updatedExperience });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const experienceId = req.params.id;

    const deletedExperience = await Experience.findByIdAndDelete(experienceId);

    if (!deletedExperience) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};


// ========================Testimonials=========================================
exports.createTestimonial = async (req, res) => {
  try {
    const { name, designation, description, email, mobile } = req.body;
    const image = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };
    const newTestimonial = new Testimonial({ name, designation, description, email, mobile, image, });

    await newTestimonial.save();

    res.json({ message: 'Testimonial created successfully', service: newTestimonial });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' , error});
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const { name, designation, description, email, mobile , imageId } = req.body;
    const testimonialId = req.params.id;

    let testimonial = await Testimonial.findById(testimonialId);
      if (!testimonial) {
        return res.status(404).json({ error: 'About not found' });
      }

      testimonial.name = name || testimonial.name;
      testimonial.designation = designation || testimonial.designation;
      testimonial.description = description || testimonial.description;
      testimonial.email = email || testimonial.email;
      testimonial.mobile = mobile || testimonial.mobile;

      if (imageId) {
        await deleteFile(testimonial.image.public_id);
        testimonial.image = {
          public_id: req?.file?.cloudinaryId,
          secure_url: req?.file?.cloudinaryUrl,
        };
      }

      await testimonial.save();

    res.json({ message: 'Testimonial updated successfully', testimonial });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const serviceId = req.params.id;

    const deleteServices = await Testimonial.findByIdAndDelete(serviceId);

    if (!deleteServices) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Delete associated image file
    await deleteFile(deleteServices.image.public_id);

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

// ==========================Contact============================================
exports.createContact = async (req, res) => {
  try {
    const { name, gender, email, mobile, age, address, description } = req.body;

    const newContact = new Contact({
      name,
      gender,
      email,
      mobile,
      age,
      address,
      description,
    });

    await newContact.save();

    res.json({ message: 'Contact created successfully', contact: newContact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { name, gender, email, mobile, age, address, description } = req.body;
    const contactId = req.params.id;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { name, gender, email, mobile, age, address, description },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact updated successfully', contact: updatedContact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;

    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error', error });
  }
};