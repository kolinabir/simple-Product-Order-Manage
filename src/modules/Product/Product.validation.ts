import { z } from 'zod'

export const productSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, 'Name is required'),
    description: z.string().trim().min(1, 'Description is required'),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    category: z.string().trim().min(1, 'Category is required'),
    tags: z.array(
      z.string().trim().nonempty({ message: 'Tag cannot be empty' }),
    ),
    variants: z
      .array(
        z.object({
          type: z.string().trim().min(1, 'Variant type is required'),
          value: z.string().trim().min(1, 'Variant value is required'),
        }),
      )
      .min(1, 'At least one variant is required'),
    inventory: z.object({
      quantity: z.number().min(0, 'Quantity cannot be negative'),
      inStock: z.boolean(),
    }),
  }),
})
