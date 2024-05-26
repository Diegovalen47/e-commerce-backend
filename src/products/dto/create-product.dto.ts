import { IProduct } from "../entities/product.entity";
import { IsString, IsIn, IsNotEmpty, IsInt, IsPositive } from "class-validator";

interface CreateProductInterface extends Omit<IProduct, "id"> {}

export class CreateProductDto implements CreateProductInterface {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsPositive()
  discountPercentage: number;

  @IsNotEmpty()
  @IsPositive()
  rating: number;

  @IsNotEmpty()
  @IsInt()
  stock: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  @IsIn(['electronics', 'clothing', 'furniture', 'books'])
  @IsNotEmpty()
  category: string;

  @IsString()
  thumbnail: string;
}