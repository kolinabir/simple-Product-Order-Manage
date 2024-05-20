import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendRespone'
import { productService } from './Product.Service'

const createProduct = catchAsync(async (req, res) => {
  const result = await productService.createProduct(req.body)
  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productService.getAllProducts()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully',
    data: result,
  })
})

const getProductById = catchAsync(async (req, res) => {
  const result = await productService.getProductById(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully',
    data: result,
  })
})

const updateProduct = catchAsync(async (req, res) => {
  const result = await productService.updateProduct(req.params.id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const result = await productService.deleteProduct(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})

const searchProduct = catchAsync(async (req, res) => {
  const result = await productService.searchProduct(
    req.query.searchTerm as string,
  )
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully',
    data: result,
  })
})

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
}
