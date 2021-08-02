
import Grade from '../../models/eschool/Grade'
import GradeRepository from '../../repository/eschool/gradeRepository'


const getById = (id: string) =>
  GradeRepository.findById(id)

const getAll = () =>
  GradeRepository.findAll()

const create = (item: Grade) =>
  GradeRepository.create(item)

export default {
  getAll,
  getById,
  create
}