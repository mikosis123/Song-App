import Router from "express";
const router = Router();
import {
  Getsongs,
  Postsongs,
  Updatesongs,
  Delatesongs,
} from "../Taskcontrols/Taskcontrollers.js";
router.get("/get", Getsongs);
router.post("/save", Postsongs);
router.put("/update/:id", Updatesongs);
router.delete("/delete/:id", Delatesongs);
export default router;
