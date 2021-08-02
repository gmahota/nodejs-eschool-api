
import Subject from '../../models/eschool/subject'
import GradeRepository from '../../repository/eschool/subjectRepository'


const getById = (id: string) =>
  GradeRepository.findById(id)

const getAll = () =>
  GradeRepository.findAll()

const create = (item: Subject) =>
  GradeRepository.create(item)

export default {
  getAll,
  getById,
  create
}