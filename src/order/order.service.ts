import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDto } from './dto/order.dto';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class OrderService {
    constructor(private readonly prisma: PrismaService) {}

    async createOrder(order: CreateOrderDto): Promise<OrderDto> {
        return this.prisma.order.create({
            data: order,
        });
    }

    findAllOrders(): Promise<OrderDto[]> {
        return this.prisma.order.findMany();
    }

    findOrderById(id: number): Promise<OrderDto> {
        return this.prisma.order.findUnique({
            where: { id },
        })
    }

    findOrdersByUser(id: number): Promise<OrderDto[]> {
        return this.prisma.order.findMany({
            where: { userId: id },
        })
    }
}