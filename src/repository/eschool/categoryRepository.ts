import Category from "../../models/eschool/category";
import { getRepository, getConnection } from "typeorm";


const findByCode = async function findByCode(code: string): Promise<Category> {
  const Repository = getRepository(Category);

  const data: Category = await Repository.findOneOrFail({
    where: { code: code }
  });

  return data;
};

const findAll = async function findAll(): Promise<Category[]> {
  const Repository = getRepository(Category);

  const data: Category[] = await Repository.find({
    order: {
      code: "ASC"
    },
  });

  return data;
}

const create = async function create(
  data: Category
): Promise<Category> {
  const Repository = getRepository(Category);

  await Repository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findByCode
};
