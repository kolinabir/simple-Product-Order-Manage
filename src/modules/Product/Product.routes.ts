import { Router } from 'express'
import { productController } from './Product.Controller'
import { productSchema } from './Product.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = Router()

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.get('/', productController.searchProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)
router.post(
  '/',
  validateRequest(productSchema),
  productController.createProduct,
)
//add a query parameter to the search endpoint

export const productRoutes = router
