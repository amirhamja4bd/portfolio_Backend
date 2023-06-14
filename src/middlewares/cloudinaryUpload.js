const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dfkhfe8sd',
  api_key: 694474943289622,
  api_secret: 'ErpFc_YF2Rj_HTZVpYKhvrgwnUk',
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


const uploadfieldsCloudinary = (req, res, next) => {
  try {
    const files = Object.entries(req.files);

    if (files.length === 0) {
      return next();
    }

    const uploadPromises = files.map(([fieldName, fileData]) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileData[0].path, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({ fieldName, fileId: result.public_id, fileUrl: result.secure_url });
          }
        });
      });
    });

    Promise.all(uploadPromises)
      .then((uploadedFiles) => {
        uploadedFiles.forEach(({ fieldName, fileId, fileUrl }) => {
          if (fieldName === 'image') {
            req.body.image = {
              image_id: fileId,
              image_url: fileUrl,
            };
          } else if (fieldName === 'file') {
            req.body.file = {
              file_id: fileId,
              file_url: fileUrl,
            };
          }
        });
        next();
      })
      .catch((error) => {
        return res.status(500).send({ error: "Error uploading file to Cloudinary" });
      });
  } catch (err) {
    next(err);
  }
};


const uploadToCloudinary = (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }
    // return;
    cloudinary.uploader.upload(req.file.path, (error, result) => {
    // console.log("result", result)
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

const deleteFile = async (id) => {
  try {
    const response = await cloudinary.uploader.destroy(id);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { upload, uploadToCloudinary, uploadfieldsCloudinary, deleteFile, };
