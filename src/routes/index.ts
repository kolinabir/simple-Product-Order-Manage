import { Router } from 'express'
import { productRoutes } from '../modules/Product/Product.routes'
import { orderRoutes } from '../modules/Order/Order.routes'

const router = Router()

const modulesRoutes = [
  {
    path: '/products',
    router: productRoutes,
  },
  {
    path: '/orders',
    router: orderRoutes,
  },
]
modulesRoutes.forEach((route) => router.use(route.path, route.router))

export default router
