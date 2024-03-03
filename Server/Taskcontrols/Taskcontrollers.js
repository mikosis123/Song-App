import Songmodel from "./Songsmodel.js";
import uploader from "../Songuploads/cloudinaryUploader.js";
export const Getsongs = async (req, res) => {
  const songs = await Songmodel.find();
  res.send(songs);
};
export const Postsongs = async (req, res) => {
  const { Title, Artist, Album, Genre, Imagefile, audioUrl } = req.body;

  try {
    // Check if there is an audio file in the request

    // Create a new song record
    const data = await Songmodel.create({
      Title,
      Artist,
      Album,
      Genre,
      Imagefile,
      audioUrl, // Add the audio URL to the song record
    });

    console.log("Data has been inserted successfully");
    res.status(200).send(data);
  } catch (err) {
    console.log("Data has not been inserted successfully", err);
    res
      .status(500)
      .send({ error: err, msg: "Data has not been inserted successfully" });
  }
};

export const Updatesongs = async (req, res) => {
  const { id } = req.params;
  const { Title, Artist, Album, Genre, Imagefile, audioUrl } = req.body;

  try {
    const updatedSong = await Songmodel.findByIdAndUpdate(
      id,
      { Title, Artist, Album, Genre, Imagefile, audioUrl },
      { new: true } // Return the updated document
    );

    if (!updatedSong) {
      return res.status(404).send("Song not found");
    }

    console.log("Data has been updated successfully");
    res.status(200).send(updatedSong);
  } catch (err) {
    console.log("Error updating song:", err);
    res
      .status(500)
      .send({ error: err, msg: "Data has not been updated successfully" });
  }
};

export const Delatesongs = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Songmodel.findByIdAndDelete(id);
    console.log("Data has been delated successfully");
    res.send("Data has been delated successfully");
  } catch (err) {
    console.log("Data has not been delated successfully", err);
    res
      .status(500)
      .send({ error: err, msg: "Data has not been delated successfully" });
  }
};
