import { eq } from 'drizzle-orm';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DrizzleService } from 'src/drizzle/drizzle.service';

@Injectable()
export class ProductsService {
  constructor(private drizzle: DrizzleService) {}

  async create(createProductDto: CreateProductDto) {
    return this.drizzle.db
      .insert(this.drizzle.schema.product)
      .values(createProductDto)
      .returning();
  }

  async findAll() {
    return this.drizzle.db
      .select()
      .from(this.drizzle.schema.product);
  }

  findOne(id: number) {
    return this.drizzle.db
      .select()
      .from(this.drizzle.schema.product)
      .where(
        eq(this.drizzle.schema.product.id, id)
      );
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.drizzle.db
      .update(this.drizzle.schema.product)
      .set(updateProductDto)
      .where(
        eq(this.drizzle.schema.product.id, id)
      )
      .returning();
  }

  remove(id: number) {
    return this.drizzle.db
      .delete(this.drizzle.schema.product)
      .where(
        eq(this.drizzle.schema.product.id, id)
      )
      .returning();
  }
}
