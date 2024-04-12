import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderProductService } from './order-product.service';

import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { OrderProductDto } from './dto/order-product.dto';

@ApiBearerAuth()
@ApiTags('Order-products')
@Controller('op')
export class OrderProductController {
    constructor(private orderProductService: OrderProductService) {}

    @ApiOperation({
        summary: 'Create order-product',
        description: 'Create a new order-product'
    })
    @ApiBody({
        description: 'Dto for creating a new order-product',
        type: CreateOrderProductDto
    })
    @ApiCreatedResponse({
        description: 'Dto of created order-product',
        type: OrderProductDto
    })
    @Post()
    async createOp(@Body() orderProduct: CreateOrderProductDto): Promise<OrderProductDto> {
        return this.orderProductService.create(orderProduct);
    }

    @ApiOperation({
        summary: 'Get all products in order',
        description: 'Get all products in particular order'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'Order\'s id'
    })
    @ApiOkResponse({
        description: 'List with all the products in the particular order',
        type: OrderProductDto,
        isArray: true
    })
    @Get(':id')
    async findAllProductsInOrder(@Param(':id') id): Promise<OrderProductDto[]> {
        return this.orderProductService.findAllProductsInOrder(id);
    }
}