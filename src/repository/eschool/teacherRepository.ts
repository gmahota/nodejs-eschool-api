import Teacher from "../../models/eschool/teacher";
import { getRepository } from "typeorm";

const findById = async function findById(id: string): Promise<Teacher> {
  const repository = getRepository(Teacher);

  const item: Teacher = await repository.findOneOrFail(
    { 
      where: { id: id }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<Teacher[]> {
  const repository = getRepository(Teacher);

  const items: Teacher[] = await repository.find({
    order: {
      name: "ASC",
      id: "DESC",
    }
  })

  return items;
};

const findByPhoneNumber = async function findByPhoneNumber(
  phoneNumber: string,
): Promise<Teacher[]> {
  const repository = getRepository(Teacher);

  const items: Teacher[] = await repository.find(
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
  item: Teacher,
): Promise<Teacher> {
  const repository = getRepository(Teacher);

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
