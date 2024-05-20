import { Schema, model } from 'mongoose'
import { TProduct } from './Product.interface'

const ProductSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: {
    type: [
      {
        type: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    required: true,
  },
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
})

export const ProductModel = model('Product', ProductSchema)
