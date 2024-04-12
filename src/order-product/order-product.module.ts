import { Module } from '@nestjs/common';
import { OrderProductController } from './order-product.controller';
import { OrderProductService } from './order-product.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module ({
    imports: [PrismaModule],
    controllers: [OrderProductController],
    providers: [OrderProductService],
})

export class OrderProductModule {}