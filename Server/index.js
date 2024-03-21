import upload from "./Songuploads/multer.js";
import uploadImage from "./Songuploads/ImageMulter.js";
import express from "express";

import mongoose from "mongoose";
import corse from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import routes from "./routes/Taskroutes.js";
import cloudinaryUploader from "./Songuploads/cloudinaryUploader.js";
import cloudinaryImage from "./Songuploads/cloudinaryImage.js";
app.use(express.json({ limit: "50mb", extended: true }));
app.use(corse());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/", (req, res) => {
  res.send("Server is running");
});

app.post("/uploadAudio", upload, async (req, res) => {
  // check for any file validation errors from multer
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }

  const audioResponse = await cloudinaryUploader(req, res);
  //   send response with audio response from cloudinary
  return res.status(200).json({ audioResponse: audioResponse.secure_url });
});

app.post("/uploadImage", uploadImage, async (req, res) => {
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }

  try {
    // invoke the uploader function to handle the upload to cloudinary
    const imageResponse = await cloudinaryImage(req, res);
    // send response with image response from cloudinary
    return res.status(200).json({ imageResponse: imageResponse.secure_url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading image" });
  }
});
const port = 5000;
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use("/api", routes);
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
