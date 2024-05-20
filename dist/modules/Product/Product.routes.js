"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const Product_Controller_1 = require("./Product.Controller");
const Product_validation_1 = require("./Product.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.get('/', Product_Controller_1.productController.getAllProducts);
router.get('/:id', Product_Controller_1.productController.getProductById);
router.put('/:id', Product_Controller_1.productController.updateProduct);
router.delete('/:id', Product_Controller_1.productController.deleteProduct);
router.post('/', (0, validateRequest_1.default)(Product_validation_1.productSchema), Product_Controller_1.productController.createProduct);
//add a query parameter to the search endpoint
exports.productRoutes = router;
