const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dfkhfe8sd',
  api_key: 694474943289622,
  api_secret: 'cloudinary://694474943289622:ErpFc_YF2Rj_HTZVpYKhvrgwnUk@dfkhfe8sd',
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer storage
const storage = multer.diskStorage({});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only images and PDF files are allowed"));
    }
  },
  limits: 2 * 1024 * 1024,
});


const uploadToCloudinary = (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    cloudinary.uploader.upload(req.file.path, (error, result) => {
      if (error) {
        return res
            .status(500)
            .send({ error: "Error uploading file to Cloudinary" });
      }

      req.file.cloudinaryId = result.public_id;
      req.file.cloudinaryUrl = result.secure_url;
      next();
    });
  } catch (err) {
    next(err);
  }
};

const deleteFile = async (publicId) => {
  try {
    const response = await cloudinary.uploader.destroy(publicId);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { upload, uploadToCloudinary, deleteFile, };
