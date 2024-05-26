import { Exclude, Expose, Transform } from 'class-transformer';
import { IProduct, ProductEntity } from '../entities/product.entity';

interface ProductLightInterface extends IProduct {
  get discountedPrice(): number;
}

const fromCentsToNormal = ({ value }) => Number((value / 100).toFixed(2));

export class ProductLightSerializer implements ProductLightInterface {
  id: number;
  title: string;

  @Transform(fromCentsToNormal)
  price: number;
  discountPercentage: number;
  @Transform(fromCentsToNormal)
  rating: number;
  stock: number;
  brand: string;
  category: string;

  @Exclude()
  description: string;

  @Exclude()
  thumbnail: string;

  @Expose()
  get discountedPrice(): number {
    const discountAmount = this.price * (this.discountPercentage / 100);
    return Number(((this.price - discountAmount) / 100).toFixed(2));
  }

  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial);
  }

  static fromOne(product: ProductEntity): ProductLightSerializer {
    return new ProductLightSerializer(product);
  }

  static fromMany(products: ProductEntity[]): ProductLightSerializer[] {
    return products.map((product) => ProductLightSerializer.fromOne(product));
  }
}