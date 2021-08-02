import AcademicLevel from "../../models/eschool/academicLevel";
import { getRepository, getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<AcademicLevel> {
  const Repository = getRepository(AcademicLevel);

  const data: AcademicLevel = await Repository.findOneOrFail({
    where: { id: id }
  });

  return data;
};

const findAll = async function findAll(): Promise<AcademicLevel[]> {
  const Repository = getRepository(AcademicLevel);

  const data: AcademicLevel[] = await Repository.find({
    order: {
      code: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: AcademicLevel
): Promise<AcademicLevel> {
  const Repository = getRepository(AcademicLevel);

  await Repository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
