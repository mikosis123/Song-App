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
};
module.exports.Updatesongs = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params.id;
  Songmodel.findByIdAndUpdate(id, { task })
    .then(() => res.send("updated successfuly"))
    .catch(
      (err) => console.log("Data has not been inserted successfully"),
      res.send({ error: err, msg: "Data has not been inserted successfully" })
    );
};
module.exports.Deletesongs = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params.id;
  Songmodel.findByIdAndDelete(id, { task })
    .then(() => res.send("delated successfuly"))
    .catch(
      (err) => console.log("Data has not been inserted successfully"),
      res.send({ error: err, msg: "Data has not been inserted successfully" })
    );
};
