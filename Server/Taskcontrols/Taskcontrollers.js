import Songmodel from "./Songsmodel.js";
import uploader from "../Songuploads/cloudinaryUploader.js";
export const Getsongs = async (req, res) => {
  const songs = await Songmodel.find();
  res.send(songs);
};
export const Postsongs = async (req, res) => {
  const { Title, Artist, Album, Genre, Imagefile, audioUrl } = req.body;

  try {
    let audioUrl;

    // Check if there is an audio file in the request
    if (req.file) {
      // Handle audio file upload
      const audioResponse = await uploader(req, res);
      audioUrl = audioResponse.secure_url;
    }

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
export const UploadSong = async (req, res) => {
  // check for any file validation errors from multer
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }
  const audioResponse = await uploader(req, res);

  //   send response with audio response from cloudinary

  return res.status(200).json({ audioResponse: audioResponse.secure_url });
};
export const Updatesongs = async (req, res) => {
  const { id } = req.params;
  const { Title, Artist, Album, Genre, Imagefile } = req.body;
  Songmodel.findByIdAndUpdate(id, { Title, Artist, Album, Genre, Imagefile })
    .then(
      (data) => console.log("Data has been updated successfully"),
      res.status("updated successfuly")
    )
    .catch(
      (err) => console.log("Data has not been updated successfully"),
      res.send("Data has not been updated successfully")
    );
  res.send("song updated successfully");
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
