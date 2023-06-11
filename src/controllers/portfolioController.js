const FormHelper = require("../helper/FormHelper");
const { Intro } = require("../models/portfolioModel");

// Create intro document
exports.createIntro = async (req, res) => {
  try {
    const { welcomeText, firstName, lastName, designation, description, social } = req.body;
    const filename = {
      public_id: req?.file?.cloudinaryId,
      secure_url: req?.file?.cloudinaryUrl,
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



// const router = require("express").Router();
// const {
//   Intro,
//   About,
//   Project,
//   Contact,
//   Experience,
//   Course,
// } = require("../models/portfolioModel");
// const User = require("../models/userModel");
// // get all portfolio data
// router.get("/get-portfolio-data", async (req, res) => {
//   try {
//     const intros = await Intro.find();
//     const abouts = await About.find();
//     const projects = await Project.find();
//     const contacts = await Contact.find();
//     const experiences = await Experience.find();
//     const courses = await Course.find();

//     res.status(200).send({
//       intro: intros[0],
//       about: abouts[0],
//       projects: projects,
//       contact: contacts[0],
//       experiences: experiences,
//       courses: courses,
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update intro
// router.post("/update-intro", async (req, res) => {
//   try {
//     const intro = await Intro.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: intro,
//       success: true,
//       message: "Intro updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update about
// router.post("/update-about", async (req, res) => {
//   try {
//     const about = await About.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: about,
//       success: true,
//       message: "Abouts updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // add experience

// router.post("/add-experience", async (req, res) => {
//   try {
//     const experience = new Experience(req.body);
//     await experience.save();
//     res.status(200).send({
//       data: experience,
//       success: true,
//       message: "Experience added successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update experience
// router.post("/update-experience", async (req, res) => {
//   try {
//     const experience = await Experience.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: experience,
//       success: true,
//       message: "Experience updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // delete experience
// router.post("/delete-experience", async (req, res) => {
//   try {
//     const experience = await Experience.findOneAndDelete({ _id: req.body._id });
//     res.status(200).send({
//       data: experience,
//       success: true,
//       message: "Experience deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // add project
// router.post("/add-project", async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(200).send({
//       data: project,
//       success: true,
//       message: "Project added successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update project
// router.post("/update-project", async (req, res) => {
//   try {
//     const project = await Project.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: project,
//       success: true,
//       message: "Project updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // delete project

// router.post("/delete-project", async (req, res) => {
//   try {
//     const project = await Project.findOneAndDelete({ _id: req.body._id });
//     res.status(200).send({
//       data: project,
//       success: true,
//       message: "Project deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // add course
// router.post("/add-course", async (req, res) => {
//   try {
//     const course = new Course(req.body);
//     await course.save();
//     res.status(200).send({
//       data: course,
//       success: true,
//       message: "Course added successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update course
// router.post("/update-course", async (req, res) => {
//   try {
//     const course = await Course.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: course,
//       success: true,
//       message: "Course updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // delete course

// router.post("/delete-course", async (req, res) => {
//   try {
//     const course = await Course.findOneAndDelete({ _id: req.body._id });
//     res.status(200).send({
//       data: course,
//       success: true,
//       message: "Course deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // update contact
// router.post("/update-contact", async (req, res) => {
//   try {
//     const contact = await Contact.findOneAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       { new: true }
//     );
//     res.status(200).send({
//       data: contact,
//       success: true,
//       message: "Contact updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // admin login
// router.post("/admin-login", async (req, res) => {
//   try {
//     const user = await User.findOne({
//       username: req.body.username,
//       password: req.body.password,
//     });
//     user.password = "";
//     if (user) {
//       res.status(200).send({
//         data: user,
//         success: true,
//         message: "Login successfully",
//       });
//     } else {
//       res.status(200).send({
//         data: user,
//         success: false,
//         message: "Invalid username or password",
//       });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// module.exports = router;
