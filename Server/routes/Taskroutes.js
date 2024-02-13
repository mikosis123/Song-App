const { Router } = require("express");
const router = Router();
const { Getsongs } = require("../Taskcontrols/Taskcontrollers");
router.get("/get", Getsongs);
module.exports = router;
