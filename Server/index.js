import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import upload from "./Songuploads/multer.js";
import uploadImage from "./Songuploads/ImageMulter.js";
import cloudinaryUploader from "./Songuploads/cloudinaryUploader.js";
import cloudinaryImage from "./Songuploads/cloudinaryImage.js";
import routes from "./routes/Taskroutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/", (req, res) => {
  res.send("Server is running");
});

app.post("/uploadAudio", upload, async (req, res) => {
  // File validation errors
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }

  try {
    // Handle upload to Cloudinary
    const audioResponse = await cloudinaryUploader(req, res);
    return res.status(200).json({ audioResponse: audioResponse.secure_url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading audio" });
  }
});

app.post("/uploadImage", uploadImage, async (req, res) => {
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }

  try {
    const imageResponse = await cloudinaryImage(req, res);
    return res.status(200).json({ imageResponse: imageResponse.secure_url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading image" });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successfully connecting to MongoDB
    app.use("/api", routes);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
