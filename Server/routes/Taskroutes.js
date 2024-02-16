const { Router } = require("express");
const router = Router();
const {
  Getsongs,
  Postsongs,
  Delatesongs,
  Updatesongs,
} = require("../Taskcontrols/Taskcontrollers");
router.get("/get", Getsongs);
router.post("/save", Postsongs);
router.put("/update/:id", Updatesongs);
router.delete("/delete/:id", Delatesongs);

module.exports = router;
