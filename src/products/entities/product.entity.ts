import { Product } from 'src/drizzle/schema'

export class ProductEntity implements Product {
  id: number
  title: string
  brand: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  category: 'electronics' | 'clothing' | 'furniture' | 'books'
  thumbnail: string
}

export interface IProduct extends ProductEntity {}
