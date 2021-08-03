import TimeTable from "../../models/eschool/timetable";
import { getRepository } from "typeorm";

const findById = async function findById(id: string): Promise<TimeTable> {
  const repository = getRepository(TimeTable);

  const item: TimeTable = await repository.findOneOrFail(
    { 
      where: { id: id }
    }    
  );

  return item;
};

const findAll = async function findAll(): Promise<TimeTable[]> {
  const repository = getRepository(TimeTable);

  const items: TimeTable[] = await repository.find({
    order: {
      id: "DESC",
    }
  })

  return items;
};

const create = async function create(
  item: TimeTable,
): Promise<TimeTable> {
  const repository = getRepository(TimeTable);

  const data  = repository.create(item);

  await repository.save(data);

  return data;
};

export default {
  create,
  findById,
  findAll
};
