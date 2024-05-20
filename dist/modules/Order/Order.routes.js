"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Order_validations_1 = require("./Order.validations");
const Order_controller_1 = require("./Order.controller");
const router = (0, express_1.Router)();
router.get('/', Order_controller_1.orderController.getAllOrders);
router.post('/', (0, validateRequest_1.default)(Order_validations_1.createOrderValidation), Order_controller_1.orderController.createOrder);
exports.orderRoutes = router;
