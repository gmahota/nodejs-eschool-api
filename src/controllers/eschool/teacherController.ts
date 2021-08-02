import { Request, Response } from "express";
import TeacherService from "../../services/eschool/teacher";
import SchoolService from "../../services/eschool/school";
import Teacher from "../../models/eschool/teacher";

export const get_all_teachers = async (request: Request, response: Response) => {
  const Students = await TeacherService.getAll();
  return response.status(200).json(Students);
};

export const get_teacher = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Student = await TeacherService.getById(id);

  if (Student) {
    return response.status(200).json(Student);
  }
  return response.status(404).json({ msg: "no Student with that id" });
};

export const create_teacher = async (request: Request, response: Response) => {
  const {
    code,
    name,
    status,
    schoolId
  } = await request.body;

  try {
    let item: Teacher = {
      id: 0,
      code,
      name,
      status
    };

    if (!!schoolId) {
      item.school = await SchoolService.getById(schoolId)
    }

    item = await TeacherService.create(item);

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
