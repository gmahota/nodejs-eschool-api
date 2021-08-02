import { Request, Response } from "express";
import SubjectService from "../../services/eschool/subject";
import SchoolService from "../../services/eschool/school";
import Subject from "../../models/eschool/subject";

export const get_all_subjects = async (request: Request, response: Response) => {
  const Students = await SubjectService.getAll();
  return response.status(200).json(Students);
};

export const get_subject = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Student = await SubjectService.getById(id);

  if (Student) {
    return response.status(200).json(Student);
  }
  return response.status(404).json({ msg: "no Student with that id" });
};

export const create_subject = async (request: Request, response: Response) => {
  const {
    code,
    name,
    type,
    requirement,
    subjectMaster,
    active,
    createdAt,
    updatedAt,
    schoolId
  } = await request.body;

  try {
    let item: Subject = {
      id: 0,
      code,
      name,
      type,
      requirement,
      subjectMaster,
      active,
      createdAt,
      updatedAt
    };

    if (!!schoolId) {
      item.school = await SchoolService.getById(schoolId)
    }

    item = await SubjectService.create(item);

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
