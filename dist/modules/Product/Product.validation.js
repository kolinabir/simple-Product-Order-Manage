"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().trim().min(1, 'Name is required'),
        description: zod_1.z.string().trim().min(1, 'Description is required'),
        price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
        category: zod_1.z.string().trim().min(1, 'Category is required'),
        tags: zod_1.z.array(zod_1.z.string().trim().nonempty({ message: 'Tag cannot be empty' })),
        variants: zod_1.z
            .array(zod_1.z.object({
            type: zod_1.z.string().trim().min(1, 'Variant type is required'),
            value: zod_1.z.string().trim().min(1, 'Variant value is required'),
        }))
            .min(1, 'At least one variant is required'),
        inventory: zod_1.z.object({
            quantity: zod_1.z.number().min(0, 'Quantity cannot be negative'),
            inStock: zod_1.z.boolean(),
        }),
    }),
});
