const multer = require('multer');

const diskStorage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, 'images');
        },
        filename: (req, file, cb) => {
            const mimeType = file.mimetype.split('/');
            const fileType = mimeType[1];
            const fileName = file.originalname + '.' + fileType;
            cb(null, fileName);
        }
    }
)

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];

}