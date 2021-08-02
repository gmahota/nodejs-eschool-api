import Student from "../../models/eschool/student";
import { getRepository } from "typeorm";

import { v4 as uuidv4 } from "uuid";

interface Key {
  id?: any;
}

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Student> {
  const repository = getRepository(Student);

  const item: Student = await repository.findOneOrFail(
    { 
      relations:['items'],
      where: { id: id }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<Student[]> {
  const repository = getRepository(Student);

  const items: Student[] = await repository.find({
    order: {
      name: "ASC",
      id: "DESC",
    }
  })

  return items;
};

const findByPhoneNumber = async function findByPhoneNumber(
  phoneNumber: string,
): Promise<Student[]> {
  const repository = getRepository(Student);

  const items: Student[] = await repository.find(
    {
      where: { phoneNumber: phoneNumber },
      order: {
        name: "ASC",
        id: "DESC",
      },
    },
  );

  return items;
};

const create = async function create(
  item: Student,
): Promise<Student> {
  const repository = getRepository(Student);

  const data  = repository.create(item);

  await repository.save(data);

  return data;
};

export default {
  create,
  findById,
  findAll,
  findByPhoneNumber,
};
