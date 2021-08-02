
import Teacher from '../../models/eschool/teacher'
import TeacherRepository from '../../repository/eschool/teacherRepository'

const getById = (id: string) =>
  TeacherRepository.findById(id)

const getAll = () =>
  TeacherRepository.findAll()

const create = (item: Teacher) =>
  TeacherRepository.create(item)

export default {
  getAll,
  getById,
  create
}