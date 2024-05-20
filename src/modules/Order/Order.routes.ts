import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { createOrderValidation } from './Order.validations'
import { orderController } from './Order.controller'

const router = Router()

router.get('/', orderController.getAllOrders)
router.post(
  '/',
  validateRequest(createOrderValidation),
  orderController.createOrder,
)

export const orderRoutes = router
