const mongoose = require("mongoose");

const songschema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  // Artist: {
  //   type: String,
  //   required: true,
  // },
  // Album: {
  //   type: String,
  //   required: true,
  // },
  // Genre: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("Songs", songschema);
