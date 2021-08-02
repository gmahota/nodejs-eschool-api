import AcademicYear from "../../models/eschool/academicYear";
import { getRepository, getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<AcademicYear> {
  const Repository = getRepository(AcademicYear);

  const data: AcademicYear = await Repository.findOneOrFail({
    where: { id: id }
  });

  return data;
};

const findAll = async function findAll(): Promise<AcademicYear[]> {
  const Repository = getRepository(AcademicYear);

  const data: AcademicYear[] = await Repository.find({
    order: {
      code: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: AcademicYear
): Promise<AcademicYear> {
  const Repository = getRepository(AcademicYear);

  await Repository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};
