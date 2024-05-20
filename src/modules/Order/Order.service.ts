import { ProductModel } from '../Product/Product.model'
import { TOrder } from './Order.interface'
import { OrderModel } from './Order.model'

const createOrder = async (order: TOrder) => {
  //check if the product is in stock
  const product = await ProductModel.findById(order.productId)
  if (!product?.inventory.inStock) {
    throw new Error('Insufficient quantity available in inventory')
  }
  const result = await OrderModel.create(order)
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    order.productId,
    { $inc: { 'inventory.quantity': -order.quantity } },
    { new: true },
  )
  //if quantity is 0 update the product status to out of stock
  if (updatedProduct?.inventory.quantity === 0) {
    await ProductModel.findByIdAndUpdate(
      order.productId,
      { 'inventory.inStock': false },
      { new: true },
    )
  }
  return result
}

const getAllOrders = async () => {
  const result = await OrderModel.find()
  return result
}

const getOrdersByEmail = async (email: string) => {
  const result = await OrderModel.find({ email })
  if (!result) {
    throw new Error('Order not found')
  }
  return result
}

export const orderService = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
}
