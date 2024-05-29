import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { OrderProductModule } from './order-product/order-product.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppGateway } from './app.gateway';
import { ProductService } from './product/product.service';

@Module({
    imports: [
        ProductModule, OrderModule, UserModule,
        OrderProductModule, PrismaModule,
    ],
    controllers: [AppController],
    providers: [AppService, AppGateway, ProductService],
})
export class AppModule {}
