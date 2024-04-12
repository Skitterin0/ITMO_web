import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import {
    ApiBearerAuth,
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({
        summary: 'Add user',
        description: 'Add a new user to the store'
    })
    @ApiBody({
        description: 'Dto for creating a user in the store',
        type: CreateUserDto
    })
    @ApiCreatedResponse({
        description: 'Created user',
        type: UserDto
    })
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return  this.userService.createUser(createUserDto);
    }

    @ApiOperation({
        summary: 'Login user',
        description: 'Login a user into service'
    })
    @ApiBody({
        description: 'Dto for logging a user in',
        type: [LoginUserDto]
    })
    @ApiOkResponse({
        description: 'User successfully logged in',
        type: UserDto
    })
    @Get('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        this.userService.login(loginUserDto);
    }

    @ApiOperation({
        summary: 'Logout user',
        description: 'Logout user form session'
    })
    @ApiOkResponse({
        description: 'User successfully logged off'
    })
    @Get('logout')
    async logout() {
        this.userService.logout();
    }

    @ApiOperation({
        summary: 'Get all users',
        description: 'Get all users in the store'
    })
    @ApiOkResponse({
        type: UserDto,
        isArray: true
    })
    @Get()
    async findAllUsers() : Promise<User[]> {
        return this.userService.findAllUsers();
    }

    @ApiOperation({
        summary: 'Find user',
        description: 'Find an existing user by id'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'Generated user id'
    })
    @ApiOkResponse({
        type: UserDto,
        isArray: false
    })
    @Get(':id')
    async findUser(@Param('id') id: number): Promise<User> {
        return this.userService.findUser(+id);
    }
    // parseIntPipe()

    @ApiOperation({
        summary: 'Delete user',
        description: 'Delete user by his id'
    })
    @ApiParam({
        name: 'id', type: 'number', description: 'User id to delete'
    })
    @ApiOkResponse({
        description: 'User was successfully deleted'
    })
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(+id);
    }
}