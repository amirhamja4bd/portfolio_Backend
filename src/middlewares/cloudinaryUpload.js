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


// const uploadfieldsCloudinary = (req, res, next) => {
//   try {
//     const files = Object.entries(req.files);

//     if (files.length === 0) {
//       return next();
//     }
//     // console.log('files', files);
//     // console.log('req.files', req.files);
//     // return;

//     const uploadPromises = files.map(([fieldName, fileData]) => {
//       // console.log('fieldName', fieldName);
//       // console.log('fieldData', fileData);
//       // return
//       return fileData.map((fileData) => {
//         return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(fileData.path, (error, result) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve({ fieldName, fileId: result.public_id, fileUrl: result.secure_url });
//           }
//         });
//       })
//       });
//     });
// // return
//     Promise.all(uploadPromises)
//       .then((uploadedFiles) => {
//         uploadedFiles.forEach(({ fieldName, fileId, fileUrl }) => {
//     // console.log('fieldName,' fieldName);
//     console.log('uploadedFiles', uploadedFiles);
//     // console.log('fieldName', fieldName);
//     // console.log('fileId', fileId);
//     // console.log('fileUrl', fileUrl);
//           if (fieldName === 'image') {
//             req.body.image = {
//               image_id: fileId,
//               image_url: fileUrl,
//             };
//           } 
//            else if (fieldName === 'file') {
//             req.body.file = {
//               file_id: fileId,
//               file_url: fileUrl,
//             };
//           } else if (fieldName === 'thumbnail') {
//             req.body.thumbnail = {
//               thumbnail_id: fileId,
//               thumbnail_url: fileUrl,
//             };
//           }
//           else if (fieldName === 'images') {
//             req.body.images = []
//             req.body.images.push({
//               images_id: fileId,
//               images_url: fileUrl,
//             })
//           }
//           // else if (fieldName === 'images') {
//           //   req.body.images = {
//           //     images_id: fileId,
//           //     images_url: fileUrl,
//           //   };
//           // }
//         });
//         next();
//       })
//       .catch((error) => {
//         console.error(error)
//         return res.status(500).send({ error: "Error uploading file to Cloudinary" });
//       });
//   } catch (err) {
//     next(err);
//   }
// };


const uploadfieldsCloudinary = async (req, res, next) => {
  try {
    const files = Object.entries(req.files);

    if (files.length === 0) {
      return next();
    }

    const uploadPromises = files.flatMap(([fieldName, fileData]) =>
      fileData.map((file) => {
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload(file.path, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({ fieldName, fileId: result.public_id, fileUrl: result.secure_url });
            }
          });
        });
      })
    );

    const uploadedFiles = await Promise.all(uploadPromises);

    uploadedFiles.forEach(({ fieldName, fileId, fileUrl }) => {
      switch (fieldName) {
        case 'image':
          req.body.image = {
            image_id: fileId,
            image_url: fileUrl,
          };
          break;
        case 'file':
          req.body.file = {
            file_id: fileId,
            file_url: fileUrl,
          };
          break;
        case 'thumbnail':
          req.body.thumbnail = {
            thumbnail_id: fileId,
            thumbnail_url: fileUrl,
          };
          break;
        case 'images':
          if (!req.body.images) {
            req.body.images = [];
          }
          req.body.images.push({
            images_id: fileId,
            images_url: fileUrl,
          });
          break;
      }
    });

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Error uploading file to Cloudinary" });
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
