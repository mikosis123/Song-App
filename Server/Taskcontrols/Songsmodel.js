import mongoose from "mongoose";

const songschema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  Imagefile: {
    type: String,
  },
  audioUrl: {
    type: String,
  },
});

const Songs = mongoose.model("Songs", songschema);

export default Songs;
