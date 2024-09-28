const multer = require('multer');
const path = require('path');

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Save files with unique names
  }
});

// Filter to accept only images
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png)'));
  }
};

// Set limits for file size (optional)
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter
});

module.exports = upload;
