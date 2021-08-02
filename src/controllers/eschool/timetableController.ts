import { Request, Response } from "express";
import TimeTableService from "../../services/eschool/timetable";
import SchoolService from "../../services/eschool/school";
import ClassService from "../../services/eschool/class";
import TimeTable from "../../models/eschool/timetable";

export const get_all_timetables = async (request: Request, response: Response) => {
  const Students = await TimeTableService.getAll();
  return response.status(200).json(Students);
};

export const get_timetable = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Student = await TimeTableService.getById(id);

  if (Student) {
    return response.status(200).json(Student);
  }
  return response.status(404).json({ msg: "no Student with that id" });
};

export const create_timetable = async (request: Request, response: Response) => {
  const {
    year,
    term,
    classId,
    schoolId
  } = await request.body;

  try {
    let item: TimeTable = {
      id: 0,
      year,
      term
    };

    if (!!schoolId) {
      item.school = await SchoolService.getById(schoolId)
    }

    if (!!classId) {
      item.class = await ClassService.getById(classId)
    }

    item = await TimeTableService.create(item);

    return response.status(200).json(item);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Student with that i", error: e },
    );
  }
};

export const delete_subject = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await SubjectService.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a Student with that i" },
    );
  }
};
