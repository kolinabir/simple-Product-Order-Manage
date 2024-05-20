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
exports.productService = void 0;
const Product_model_1 = require("./Product.model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.create(product);
    return result;
});
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const result = yield Product_model_1.ProductModel.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
                { 'variants.type': { $regex: searchTerm, $options: 'i' } },
                { 'variants.value': { $regex: searchTerm, $options: 'i' } },
            ],
        });
        return result;
    }
    const result = yield Product_model_1.ProductModel.find();
    return result;
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.findById(id);
    return result;
});
const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.ProductModel.findByIdAndDelete(id);
    return result;
});
exports.productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
