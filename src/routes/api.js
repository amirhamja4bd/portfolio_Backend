const express = require('express');
const { login, register } = require('../controllers/userController');
const { isAdmin, isViewPermission } = require('../middlewares/authMiddleware');
const { upload, uploadfieldsCloudinary, uploadToCloudinary, deleteFile } = require('../middlewares/cloudinaryUpload');
const { createIntro, getAllIntro,  portfolioDataGet, createAbout, updateAbout, deleteAbout, deleteService, updateService, createService, createSkill, updateSkill, deleteSkill, createExperience, updateExperience, deleteExperience, createTestimonial, updateTestimonial, deleteTestimonial, createContact, updateContact, deleteContact } = require('../controllers/portfolioController');

const router = express.Router();

// User
router.post('/register', register);
router.post('/login', login)

// Role Based Authentication
router.get('/is-view', isViewPermission, (req, res)=>{
    res.json({ok: true});
} );
router.get('/is-admin', isViewPermission, isAdmin, (req, res)=>{
    res.json({ok: true});
} );

// Get all fortfolio data
router.get('/portfolio-data' , portfolioDataGet);

// Intro
router.get('/intros' , getAllIntro);
router.post('/intro', isViewPermission, isAdmin , upload.single('image'), uploadToCloudinary, createIntro);

// router.post('/intro', isViewPermission , isAdmin , upload.fields([
//     { name: 'file', maxCount: 1 },
//     { name: 'image', maxCount: 1 }
//   ]), uploadfieldsCloudinary, createIntro);


// about
router.post('/about', isViewPermission, isAdmin , upload.single('image'), uploadToCloudinary, createAbout);
router.put('/about/:id', isViewPermission, isAdmin , upload.single('image'), uploadToCloudinary, updateAbout);
router.delete('/about/:id', isViewPermission, isAdmin , deleteAbout);

// Services
router.post('/service', isViewPermission, isAdmin , upload.single('image'), uploadToCloudinary, createService);
router.put('/service/:id', isViewPermission, isAdmin , upload.single('image'), uploadToCloudinary, updateService);
router.delete('/service/:id', isViewPermission, isAdmin , deleteService);

// Skills
router.post('/skill', isViewPermission , isAdmin , createSkill);
router.put('/skill/:id', isViewPermission , isAdmin , updateSkill);
router.delete('/skill/:id', isViewPermission , isAdmin , deleteSkill);

// experience
router.post('/experience', isViewPermission , isAdmin , createExperience);
router.put('/experience/:id', isViewPermission , isAdmin , updateExperience);
router.delete('/experience/:id', isViewPermission , isAdmin , deleteExperience);

// testimonial
router.post('/testimonial', isViewPermission , isAdmin , upload.single('image'), uploadToCloudinary, createTestimonial);
router.put('/testimonial/:id', isViewPermission , isAdmin , upload.single('image'), uploadToCloudinary, updateTestimonial);
router.delete('/testimonial/:id', isViewPermission , isAdmin , deleteTestimonial);

// contact
router.post('/contact', isViewPermission , isAdmin , createContact);
router.put('/contact/:id', isViewPermission , isAdmin , updateContact);
router.delete('/contact/:id', isViewPermission , isAdmin , deleteContact);


module.exports = router;
