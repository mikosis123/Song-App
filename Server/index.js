const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/songs", {})
  .then(() => {
    console.log("Connected to DB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
