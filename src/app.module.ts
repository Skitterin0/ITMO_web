import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { OrderProductModule } from './order-product/order-product.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [
        ProductModule, OrderModule, UserModule,
        OrderProductModule, PrismaModule,
        AuthModule.forRoot({
            // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
            connectionURI: "https://try.supertokens.com",
            // apiKey: <API_KEY(if configured)>,
            appInfo: {
                // Learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
                appName: "street-kanvas",
                apiDomain: "http://localhost:1889",
                websiteDomain: "http://localhost:1889",
                apiBasePath: "/apitoken",
                websiteBasePath: "/auth"
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
