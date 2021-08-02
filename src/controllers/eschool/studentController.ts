import { Request, Response } from "express";
import StudentService from "../../services/eschool/Student";
import Student from "../../models/eschool/Student";

export const get_all_students = async (request: Request, response: Response) => {
  const Students = await StudentService.getAll();
  return response.status(200).json(Students);
};

export const get_student = async (request: Request, response: Response) => {
  const { id } =request.params;

  const Student = await StudentService.getById(id);

  if (Student) {
    return response.status(200).json(Student);
  }
  return response.status(404).json({ msg: "no Student with that id" });
};

export const create_student = async (request: Request, response: Response) => {
  const {
    name,
    surname,
    nickname,
    birthdate,
    address,
    province,
    country,
    gender,
    status,
    parents,
    medicalData
  } = await request.body;

  try {
    let Student: Student = {
      id: 0,
      name,
      surname,
      nickname,
      birthdate,
      address,
      province,
      country,
      gender,
      status,
      parents,
      medicalData
    };

    Student = await StudentService.create(Student);

    return response.status(200).json(Student);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Student with that i", error: e },
    );
  }
};

export const delete_student = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await StudentService.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a Student with that i" },
    );
  }
};
