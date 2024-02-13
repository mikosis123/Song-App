const express = require("express");
const mongoose = require("mongoose");
const corse = require("cors");
require("dotenv").config();
const app = express();
const router = require("../Server/routes/Taskroutes");
app.use(express.json());
app.use(corse());
app.get("/", (req, res) => {
  res.send("Server is running");
});
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use("/api", router);
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
