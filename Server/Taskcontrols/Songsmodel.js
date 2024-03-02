import mongoose from "mongoose";

const songschema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Artist: {
    type: String,
  },
  Album: {
    type: String,
  },
  Genre: {
    type: String,
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
