import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './user/filter/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(join(__dirname, '..', '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', '..', 'public', 'views'));
    app.setViewEngine('hbs');
    app.useGlobalPipes(new ValidationPipe({
            disableErrorMessages: true,
        }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());

    app.enableCors({
        origin: ['http://localhost:1889'],
        credentials: true,
    });

    hbs.registerPartials(join(__dirname, '..', '..', 'public', 'views', 'partials'));

    const config = new DocumentBuilder()
        .setTitle('Street Kanvas')
        .addTag('Front', 'Endpoints for site pages')
        .addTag('Users', 'Block for user entities endpoints')
        .addTag('Products', 'Block for product entities endpoints')
        .addTag('Orders', 'Block for orders access endpoints')
        .addTag('Order-products', 'Block for access to wiring table order-products')
        .setDescription("The SK API description")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(configuration().port);
}

bootstrap();