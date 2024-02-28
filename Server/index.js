import upload from "./Songuploads/multer.js";
import uploader from "./Songuploads/cloudinaryUploader.js";
import express from "express";
import mongoose from "mongoose";
import corse from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import routes from "./routes/Taskroutes.js";
app.use(express.json({ limit: "50mb", extended: true }));
app.use(corse());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/", (req, res) => {
  res.send("Server is running");
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use("/api", routes);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
