import { Router } from "express";
import {
  get_all_schools,
  get_school,
  create_school
} from "../controllers/eschool/schoolController";

import {
  get_all_academicYears,
  get_academicYear,
  create_academicYear
} from "../controllers/eschool/academicYearController";

import {
  get_all_academicLevels,
  get_academicLevel,
  create_academicLevel
} from "../controllers/eschool/academicLevelController";

import authMiddleware from "../middlewares/auth";

const eschoolRouter = Router();

eschoolRouter
  .get("/schools", get_all_schools)
  .get("/schools/:id", get_school)
  .post("/schools/", create_school)

eschoolRouter
  .get("/academicLevels", get_all_academicLevels)
  .get("/academicLevels/:id", get_academicLevel)
  .post("/academicLevels/", create_academicLevel)

export default eschoolRouter;