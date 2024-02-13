const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Artist: {
    type: String,
    required: true,
  },
  Album: {
    type: String,
    required: true,
  },
  Genre: {
    type: Date,
    default: Date.now,
  },
});
module.export = mongoose.model("Songs", taskschema);
