import { z } from 'zod'

export const createOrderValidation = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    productId: z.string(),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    quantity: z
      .number()
      .positive({ message: 'Quantity must be a positive number' }),
  }),
})
