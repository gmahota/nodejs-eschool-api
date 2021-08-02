
import Class from '../../models/eschool/class'
import ClassRepository from '../../repository/eschool/classRepository'


const getById = (id: string) =>
  ClassRepository.findById(id)

const getAll = () =>
  ClassRepository.findAll()

const create = (item: Class) =>
  ClassRepository.create(item)

export default {
  getAll,
  getById,
  create
}