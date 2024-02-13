const router = require("express").Router();
const { Getsongs } = require("../Taskcontrols/Taskcontrollers");
router.get("/get", Getsongs);
module.exports = router;
