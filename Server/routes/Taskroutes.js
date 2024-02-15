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
router.put("/update", Updatesongs);
router.delete("/delate", Delatesongs);

module.exports = router;
