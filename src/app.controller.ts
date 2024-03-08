import { Controller, Get, Render, Req, UseInterceptors } from '@nestjs/common';
import { AppService } from "./app.service";
import { Interceptor } from "./tools/interceptor";

@Controller()
@UseInterceptors(Interceptor)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get(['', '/index.html'])
    @Render('index')
    root() {}

    @Get('/shop.html')
    @Render('shop')
    shop() {}

    @Get('/services.html')
    @Render('services')
    service() {}

    @Get('/contact.html')
    @Render('contact')
    contact() {}

    private getServerProcessingTime(@Req() request) {
        const serverProcessingTime = request.res.locals.serverProcessingTime || 0;

        return {
            serverProcessingTime,
        };
    }
}
