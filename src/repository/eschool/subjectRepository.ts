import Subject from "../../models/eschool/subject";
import { getRepository } from "typeorm";

const findById = async function findById(id: string): Promise<Subject> {
  const repository = getRepository(Subject);

  const item: Subject = await repository.findOneOrFail(
    { 
      where: { id: id }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<Subject[]> {
  const repository = getRepository(Subject);

  const items: Subject[] = await repository.find({
    order: {
      name: "ASC",
      id: "DESC",
    }
  })

  return items;
};

const create = async function create(
  item: Subject,
): Promise<Subject> {
  const repository = getRepository(Subject);

  const data  = repository.create(item);

  await repository.save(data);

  return data;
};

export default {
  create,
  findById,
  findAll
};
