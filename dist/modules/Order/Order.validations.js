"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderValidation = void 0;
const zod_1 = require("zod");
exports.createOrderValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Invalid email address'),
        productId: zod_1.z.string(),
        price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
        quantity: zod_1.z
            .number()
            .positive({ message: 'Quantity must be a positive number' }),
    }),
});
