const Songmodel = require("./Songsmodel");
module.exports.Getsongs = async (req, res) => {
  const songs = await Songmodel.find();
  res.send(songs);
};
module.exports.Postsongs = async (req, res) => {
  const { task } = req.body;
  Songmodel.create({ task })
    .then(
      (data) => console.log("Data has been inserted successfully"),
      res.status(200).send(data)
    )
    .catch(
      (err) => console.log("Data has not been inserted successfully"),
      res.send({ error: err, msg: "Data has not been inserted successfully" })
    );
  res.send("song added successfully");
};
