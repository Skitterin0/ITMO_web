import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiBearerAuth()
@ApiTags('Products')
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @ApiOperation({
        summary: 'Add product',
        description: 'Add a new product to the shop'
    })
    @ApiBody({
        description: 'Dto for adding a product into the store',
        type: CreateProductDto
    })
    @ApiCreatedResponse({
        description: 'Created product',
        type: ProductDto
    })
    @Post()
    async createProduct(@Body() product: CreateProductDto): Promise<ProductDto> {
        return this.productService.createProduct(product);
    }

    @ApiOperation({
        summary: 'Update product',
        description: 'Update info about a product'
    })
    @ApiParam({
        name: 'id',
        type: 'number',
        description: 'Id of an updating product'
    })
    @ApiBody({
        description: 'Dto of the product with the changed parameters',
        type: ProductDto
    })
    @ApiOkResponse({
        description: 'Dto with the updated parameters',
        type: ProductDto
    })
    @Patch(':id')
    async updateProduct(@Param('id') id: number, @Body() product: UpdateProductDto): Promise<ProductDto> {
        return this.productService.updateProduct(+id, product);
    }

    @ApiOperation({
        summary: 'Get all products',
        description: 'Get all products in the store'
    })
    @ApiOkResponse({
        description: 'Array with all the products in the store',
        type: ProductDto,
        isArray: true
    })
    @Get()
    async findAllProducts(): Promise<ProductDto[]> {
        return this.productService.findAllProducts();
    }


    @ApiOperation({
        summary: 'Find product',
        description: 'FInd particular product by id'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'Generated product id'
    })
    @ApiOkResponse({
        type: ProductDto
    })
    @Get(':id')
    async findProduct(@Param('id') id): Promise<ProductDto> {
        return this.productService.findProduct(+id);
    }
}