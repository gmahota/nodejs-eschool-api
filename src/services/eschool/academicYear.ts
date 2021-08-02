
import AcademicYear from '../../models/eschool/academicYear'
import AcademicYearRepository from '../../repository/eschool/academicYearRepository'


const getById = (id: string) =>
  AcademicYearRepository.findById(id)

const getAll = () =>
  AcademicYearRepository.findAll()

const create = (School: AcademicYear) =>
  AcademicYearRepository.create(School)

export default {
  getAll,
  getById,
  create
}