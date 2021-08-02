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

import {
  get_all_categories,
  get_category,
  create_category
} from "../controllers/eschool/categoryController";

import {
  get_all_grades,
  get_grade,
  create_grade
} from "../controllers/eschool/gradeController";

import {
  get_all_classes,
  get_class,
  create_class
} from "../controllers/eschool/classController";

import {
  get_all_students,
  get_student,
  create_student
} from "../controllers/eschool/studentController";

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

eschoolRouter
  .get("/categories", get_all_categories)
  .get("/categories/:id", get_category)
  .post("/categories/", create_category)

eschoolRouter
  .get("/grades", get_all_grades)
  .get("/grades/:id", get_grade)
  .post("/grades/", create_grade)

  eschoolRouter
  .get("/classes", get_all_classes)
  .get("/classes/:id", get_class)
  .post("/classes/", create_class)

  eschoolRouter
  .get("/students", get_all_students)
  .get("/students/:id", get_student)
  .post("/students/", create_student)
export default eschoolRouter;