import { TProduct } from './Product.interface'
import { ProductModel } from './Product.model'

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}

const getAllProducts = async (searchTerm?: string) => {
  if (searchTerm) {
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { 'variants.type': { $regex: searchTerm, $options: 'i' } },
        { 'variants.value': { $regex: searchTerm, $options: 'i' } },
      ],
    })
    return result
  }
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


export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
