import Category from '../../models/eschool/category'
import CategoryRepository from '../../repository/eschool/categoryRepository'


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