
import AcademicLevel from '../../models/eschool/academicLevel'
import AcademicLevelRepository from '../../repository/eschool/academicLevelRepository'


const getById = (id: string) =>
  AcademicLevelRepository.findById(id)

const getAll = () =>
  AcademicLevelRepository.findAll()

const create = (School: AcademicLevel) =>
  AcademicLevelRepository.create(School)

export default {
  getAll,
  getById,
  create
}