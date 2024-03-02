import upload from "./Songuploads/multer.js";
import uploader from "./Songuploads/cloudinaryUploader.js";
import express from "express";
import mongoose from "mongoose";
import corse from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import routes from "./routes/Taskroutes.js";
import cloudinaryUploader from "./Songuploads/cloudinaryUploader.js";
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
  //   invoke the uplader function to handle the upload to cloudinary
  //   we are passing the req, and res to cloudinaryUploader function
  const audioResponse = await cloudinaryUploader(req, res);
  //   send response with audio response from cloudinary
  return res.status(200).json({ audioResponse: audioResponse.secure_url });
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use("/api", routes);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
