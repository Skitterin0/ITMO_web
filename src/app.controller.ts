import { Controller, Get, Render, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from "./app.service";
import { ToolsInterceptor } from "./tools/tools.interceptor";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

@ApiBearerAuth()
@ApiTags('Front')
@Controller()
@UseInterceptors(ToolsInterceptor)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('test')
    @UseGuards(new AuthGuard())
    async getTest(@Session() session: SessionContainer): Promise<string> {
        // TODO: magic
        return "magic";
    }

    @Get('/main')
    @ApiOperation({
        summary: 'SK main page endpoint',
        description: 'Page with all the the major information about the service'
    })
    @ApiOkResponse({description: 'Page loaded successfully'})
    @Render('index')
    root() {}

    @Get('/shop')
    @ApiOperation({
        summary: 'Shop page endpoint',
        description: 'Page with the selling products'
    })
    @ApiOkResponse({description: 'Page loaded successfully'})
    @Render('shop')
    shop() {}

    @Get('/services')
    @ApiOperation({
        summary: 'Services page endpoint',
        description: 'Page with the SK services descriptions'
    })
    @ApiOkResponse({description: 'Page loaded successfully'})
    @Render('services')
    service() {}

    @Get('/contact')
    @ApiOperation({
        summary: 'Contact page endpoint',
        description: 'Page with the additional contact information'
    })
    @ApiOkResponse({description: 'Page loaded successfully'})
    @Render('contact')
    contact() {}
}
