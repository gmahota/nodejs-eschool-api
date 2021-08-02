
import Student  from '../../models/eschool/student'
import StudentRepository  from '../../repository/eschool/studentRepository'

const getById = (id:string) =>
    StudentRepository.findById(id)

const getAll = () =>
    StudentRepository.findAll()

const create = (Student:Student) =>
  StudentRepository.create(Student)

export default {
  getAll,
  getById,
  create
}