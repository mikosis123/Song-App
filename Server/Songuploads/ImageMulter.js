import multer from "multer";

// configure multer disk storage for file uploads
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    let fileExt = file.originalname.split(".").pop();
    const fileName = `${new Date().getTime()}.${fileExt}`;
    cb(null, fileName);
  },
});

// set up file filter for audio files
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype !== "image/jpeg" &&
    file.mimetype !== "image/png" &&
    file.mimetype !== "image/gif"
  ) {
    req.fileValidationError = "File type must be jpeg, png, or gif";
    return cb(null, false, req.fileValidationError);
  } else {
    cb(null, true);
  }
};

// configure multer with specified functions above for audio files
const uploadImage = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single("image");

export default uploadImage;
