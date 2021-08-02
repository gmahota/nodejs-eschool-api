
import TimeTable from '../../models/eschool/timetable'
import TimeTableRepository from '../../repository/eschool/timetableRepository'

const getById = (id: string) =>
  TimeTableRepository.findById(id)

const getAll = () =>
  TimeTableRepository.findAll()

const create = (item: TimeTable) =>
  TimeTableRepository.create(item)

export default {
  getAll,
  getById,
  create
}