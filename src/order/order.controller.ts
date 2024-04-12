import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.interface';
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDto } from './dto/order.dto';

@ApiBearerAuth()
@ApiTags('Orders')
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @ApiOperation({
        summary: 'Create order',
        description: 'Add a new order'
    })
    @ApiBody({
        description: 'Dto for creating a new order',
        type: CreateOrderDto
    })
    @ApiCreatedResponse({
        description: 'Dto for created order',
        type: OrderDto
    })
    @Post()
    async createOrder(@Body() order: CreateOrderDto): Promise<OrderDto> {
        return this.orderService.createOrder(order);
    }


    @ApiOperation({
        summary: 'Get all orders',
        description: 'Get all orders ever made in store'
    })
    @ApiOkResponse({
        description: 'List with all the orders',
        type: OrderDto,
        isArray: true
    })
    @Get()
    async findAllOrders(): Promise<OrderDto[]> {
        return this.orderService.findAllOrders();
    }

    @ApiOperation({
        summary: 'Find order',
        description: 'Find order by its id'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'Generated order id'
    })
    @ApiOkResponse({
        description: 'Dto for the found order',
        type: OrderDto
    })
    @Get(':orderId')
    async findOrderById(@Param('orderId') id): Promise<OrderDto> {
        return this.orderService.findOrderById(+id);
    }

    @ApiOperation({
        summary: 'Find user\'s orders',
        description: 'Find all orders made by particular user'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'Id of user who made orders'
    })
    @ApiOkResponse({
        description: 'List with all the orders of particular user',
        type: OrderDto,
        isArray: true
    })
    @Get(':userId')
    async findOrdersByUser(@Param('userId') id): Promise<OrderDto[]> {
        return this.orderService.findOrdersByUser(+id);
    }
}