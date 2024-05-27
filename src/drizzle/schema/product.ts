import { integer, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum('category', ['electronics', 'clothing', 'furniture', 'books'])

export const product = pgTable('product', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256}).unique(),
  description: varchar('description', { length: 1024 }),
  price: integer('price'),
  discountPercentage: integer('discount_percentage'),
  rating: integer('rating'),
  stock: integer('stock'),
  brand: varchar('brand', { length: 256 }),
  category: categoryEnum('category'),
  thumbnail: varchar('thumbnail_media_url', { length: 256 }),
})

export type Product = typeof product.$inferSelect