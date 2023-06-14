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
      intro: intros[0],
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
    const filename = {
      public_id: '',
      secure_url: '',
    };
    const imageName = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };
    if (FormHelper.isEmpty(firstName || lastName)){
      return res.status(400).json({
          error: 'Name is required'
      })
  }
    const newIntro = new Intro({ welcomeText, firstName, lastName, designation, description, file : filename, image: imageName, social, });

    await newIntro.save();

    res.json({ message: 'Intro created successfully', intro: newIntro });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' , error});
  }
};

// Get all intro documents
exports.getAllIntro = async (req, res) => {
  try {
    const intros = await Intro.find({});
    res.json({ intros });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get intro document by ID
exports.getIntroById = async (req, res) => {
  try {
    const { id } = req.params;
    const intro = await Intro.findById(id);
    if (!intro) {
      return res.status(404).json({ error: 'Intro not found' });
    }
    res.json({ intro });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update intro document by ID
exports.updateIntroById = async (req, res) => {
  try {
    const { id } = req.params;
    const { welcomeText, firstName, lastName, designation, description, resume, image, social } = req.body;

    const updatedIntro = await Intro.findByIdAndUpdate(
      id,
      {
        welcomeText,
        firstName,
        lastName,
        designation,
        description,
        resume,
        image,
        social,
      },
      { new: true }
    );

    if (!updatedIntro) {
      return res.status(404).json({ error: 'Intro not found' });
    }

    res.json({ message: 'Intro updated successfully', intro: updatedIntro });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete intro document by ID
exports.deleteIntroById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedIntro = await Intro.findByIdAndDelete(id);
    if (!deletedIntro) {
      return res.status(404).json({ error: 'Intro not found' });
    }
    res.json({ message: 'Intro deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

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
    const { welcomeText, title, description } = req.body;
    const aboutId = req.params.id;

    const filename = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };

    const updatedAbout = await About.findByIdAndUpdate(
      aboutId,
      { welcomeText, title, description , image: filename },
      { new: true }
    );

    if (!updatedAbout) {
      return res.status(404).json({ error: 'About not found' });
    }

    res.json({ message: 'About updated successfully', about: updatedAbout });
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
    const { serviceName, description } = req.body;
    const serviceId = req.params.id;

    const image = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };

    const updatedService = await Services.findByIdAndUpdate(
      serviceId,
      { serviceName, description , image },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json({ message: 'Service updated successfully', service: updatedService });
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
    const { name, designation, description, email, mobile } = req.body;
    const serviceId = req.params.id;

    const image = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
    };

    const updatedService = await Testimonial.findByIdAndUpdate(
      serviceId,
      { name, designation, description, email, mobile , image },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.json({ message: 'Service updated successfully', service: updatedService });
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