import { TProduct } from './Product.interface'
import { ProductModel } from './Product.model'

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}

const getAllProducts = async () => {
  const result = await ProductModel.find()
  return result
}

const getProductById = async (id: string) => {
  const result = await ProductModel.findById(id)
  return result
}

const updateProduct = async (id: string, product: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, product, {
    new: true,
  })
  return result
}

const deleteProduct = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id)
  return result
}

const searchProduct = async (query: string) => {
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { category: { $regex: query, $options: 'i' } },
      { 'variants.type': { $regex: query, $options: 'i' } },
      { 'variants.value': { $regex: query, $options: 'i' } },
    ],
  })
  return result
}

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
}
