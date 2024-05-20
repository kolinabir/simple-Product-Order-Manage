import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendRespone'
import { orderService } from './Order.service'

const createOrder = catchAsync(async (req, res) => {
  const result = await orderService.createOrder(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order created successfully',
    data: result,
  })
})

const getAllOrders = catchAsync(async (req, res) => {
  const result = await orderService.getAllOrders(
    req.query.email as string | undefined,
  )
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  })
})



export const orderController = {
  createOrder,
  getAllOrders,
}
