const { Router } = require("express");
const router = Router();
const {
  Getsongs,
  Postsongs,
  Deletesongs,
  Updatesongs,
} = require("../Taskcontrols/Taskcontrollers");
router.get("/get", Getsongs);
module.exports = router;
