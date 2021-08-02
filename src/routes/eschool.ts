import { Router } from "express";
import {
    get_all_schools,
    get_school,
    create_school
  } from "../controllers/eschool/schoolController";

import authMiddleware from "../middlewares/auth";

const eschoolRouter = Router();

eschoolRouter
    .get("/schools", get_all_schools)
    .get("/schools/:id", get_school)
    .post("/schools/",create_school)

export default eschoolRouter;