"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const Product_model_1 = require("../Product/Product.model");
const Order_model_1 = require("./Order.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    //check if the product is in stock
    const product = yield Product_model_1.ProductModel.findById(order.productId);
    if (!(product === null || product === void 0 ? void 0 : product.inventory.inStock)) {
        throw new Error('Insufficient quantity available in inventory');
    }
    const result = yield Order_model_1.OrderModel.create(order);
    const updatedProduct = yield Product_model_1.ProductModel.findByIdAndUpdate(order.productId, { $inc: { 'inventory.quantity': -order.quantity } }, { new: true });
    //if quantity is 0 update the product status to out of stock
    if ((updatedProduct === null || updatedProduct === void 0 ? void 0 : updatedProduct.inventory.quantity) === 0) {
        yield Product_model_1.ProductModel.findByIdAndUpdate(order.productId, { 'inventory.inStock': false }, { new: true });
    }
    return result;
});
const getAllOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield Order_model_1.OrderModel.find({ email });
        return result;
    }
    const result = yield Order_model_1.OrderModel.find();
    return result;
});
exports.orderService = {
    createOrder,
    getAllOrders,
};
