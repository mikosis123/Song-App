const express = require("express");
const mongoose = require("mongoose");
const corse = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(corse());
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
