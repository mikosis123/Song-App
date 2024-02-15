const Songmodel = require("./Songsmodel");
module.exports.Getsongs = async (req, res) => {
  const songs = await Songmodel.find();
  res.send(songs);
};
module.exports.Postsongs = async (req, res) => {
  const { Title, Artist, Album, Genre } = req.body;
  try {
    const data = await Songmodel.create({ Title, Artist, Album, Genre });
    console.log("Data has been inserted successfully");
    res.status(200).send(data);
  } catch (err) {
    console.log("Data has not been inserted successfully", err);
    res
      .status(500)
      .send({ error: err, msg: "Data has not been inserted successfully" });
  }
};
module.exports.Updatesongs = async (req, res) => {
  const { id } = req.params;
  const { Title } = req.body;
  Songmodel.findByIdAndUpdate(id, { Title })
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
module.exports.Delatesongs = async (req, res) => {
  const { id } = req.params;
  Songmodel.findByIdAndDelete(id)
    .then(
      (data) => console.log("Data has been delated successfully"),
      res.status("delated successfuly")
    )
    .catch(
      (err) => console.log("Data has not been delated successfully"),
      res.send("Data has not been delated successfully")
    );
  res.send("song updated successfully");
};
