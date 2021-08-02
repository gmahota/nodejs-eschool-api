
import School from '../../models/eschool/school'
import SchoolRepository from '../../repository/eschool/schoolRepository'


const getById = (id: string) =>
  SchoolRepository.findById(id)

const getAll = () =>
  SchoolRepository.findAll()

const create = (School: School) =>
  SchoolRepository.create(School)

export default {
  getAll,
  getById,
  create
}