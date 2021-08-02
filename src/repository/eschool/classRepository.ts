import Class from "../../models/eschool/class";
import { getRepository, getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Class> {
  const Repository = getRepository(Class);

  const data: Class = await Repository.findOneOrFail({
    where: { id: id }
  });

  return data;
};

const findAll = async function findAll(): Promise<Class[]> {
  const Repository = getRepository(Class);

  const data: Class[] = await Repository.find({
    order: {
      code: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: Class
): Promise<Class> {
  const Repository = getRepository(Class);

  await Repository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
