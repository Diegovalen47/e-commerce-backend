import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Query
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductLightSerializer } from './serializers/product-ligth-serializer';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common';

@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiTags('products')
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiTags('products')
  async findAll(@Query() paginationDto: PaginationDto): Promise<ProductLightSerializer[]> {
    const products = await this.productsService.findAll();
    return ProductLightSerializer.fromMany(products);
  }

  @Get(':id')
  @ApiTags('products')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiTags('products')
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiTags('products')
  remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.productsService.remove(id);
  }
}
