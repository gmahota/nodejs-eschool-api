
import Category from '../../models/eschool/Category'
import CategoryRepository from '../../repository/eschool/CategoryRepository'


const getByCode = (id: string) =>
  CategoryRepository.findByCode(id)

const getAll = () =>
  CategoryRepository.findAll()

const create = (item: Category) =>
  CategoryRepository.create(item)

export default {
  getAll,
  getByCode,
  create
}