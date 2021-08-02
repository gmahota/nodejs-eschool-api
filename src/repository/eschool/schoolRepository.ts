import School from "../../models/eschool/school";
import { getRepository, getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<School> {
  const SchoolRepository = getRepository(School);

  const data: School = await SchoolRepository.findOneOrFail({
    where: { id: id }
  });

  return data;
};

const findAll = async function findAll(): Promise<School[]> {
  const SchoolRepository = getRepository(School);

  const data: School[] = await SchoolRepository.find({
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: School
): Promise<School> {
  const SchoolRepository = getRepository(School);

  await SchoolRepository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
