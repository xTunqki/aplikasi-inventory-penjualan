const multer = require('multer');

module.exports = {
  upload : multer({
    storage: multer.diskStorage({
      filename: function (req, file, cb) {
        const originalExtension = file.originalname.split('.').pop(); // Get the original file extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate a unique suffix
        const newFilename = file.fieldname + '-' + uniqueSuffix + '.' + originalExtension; // Construct the new filename with extension
        cb(null, newFilename); // Pass the new filename to Multer
      },
      destination: function (req, file, cb) {
        cb(null, './uploads/');
      }
    }),
  })
}