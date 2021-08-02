import Grade from "../../models/eschool/grade";
import { getRepository, getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Grade> {
  const Repository = getRepository(Grade);

  const data: Grade = await Repository.findOneOrFail({
    where: { id: id },
    relations:["classes"]
  });

  return data;
};

const findAll = async function findAll(): Promise<Grade[]> {
  const Repository = getRepository(Grade);

  const data: Grade[] = await Repository.find({
    order: {
      code: "ASC",
      id: "DESC",
    },
    relations:["classes"]
  });

  return data;
}

const create = async function create(
  data: Grade
): Promise<Grade> {
  const Repository = getRepository(Grade);

  await Repository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
