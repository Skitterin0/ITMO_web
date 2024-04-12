import { Injectable, NotImplementedException } from '@nestjs/common';
import { OrderProduct } from './order-product.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderProductDto } from './dto/order-product.dto';
import { CreateOrderProductDto } from './dto/create-order-product.dto';

@Injectable()
export class OrderProductService {
    constructor(private readonly prisma: PrismaService) {
    }

    async create(orderProduct: CreateOrderProductDto): Promise<OrderProductDto> {
        return this.prisma.orderProduct.create({
            data: orderProduct,
        });
    }

    async findAllProductsInOrder(id: number): Promise<OrderProduct[]> {
        return this.prisma.orderProduct.findMany({
            where: { orderId: id },
        });
    }
}