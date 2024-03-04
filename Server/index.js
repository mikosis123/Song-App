import upload from "./Songuploads/multer.js";
import uploader from "./Songuploads/cloudinaryUploader.js";
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

// Remove the '/' route handlers

app.post("/uploadAudio", upload, async (req, res) => {
  // Your existing code
});

app.post("/uploadImage", uploadImage, async (req, res) => {
  // Your existing code
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use("/api", routes);

// Instead of listening on port 5000 locally, use environment variable PORT if available, otherwise default to 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
