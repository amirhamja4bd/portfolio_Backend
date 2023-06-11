const express = require('express');
const { login, register } = require('../controllers/userController');
const { isAdmin, isViewPermission } = require('../middlewares/authMiddleware');
const { upload, uploadToCloudinary } = require('../middlewares/cloudinaryUpload');
const { createIntro, getAllIntro } = require('../controllers/portfolioController');

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


// Intro
router.get('/intros' , getAllIntro);
router.post('/intro', isViewPermission, isAdmin , upload.single('file'), uploadToCloudinary, createIntro);
// router.post('/intro', upload.fields([
//     { name: 'file', maxCount: 1 },
//     { name: 'image', maxCount: 1 }
//   ]), uploadToCloudinary, createIntro);







module.exports = router;