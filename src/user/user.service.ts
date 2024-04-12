import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async createUser(user: CreateUserDto): Promise<UserDto> {
        return this.prisma.user.create({
            data: user,
        })
    }

    login(user: LoginUserDto) {
        throw new NotImplementedException();
    }

    logout() {
        throw new NotImplementedException();
    }

    async findUser(id: number): Promise<UserDto> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async findAllUsers(): Promise<UserDto[]> {
        return this.prisma.user.findMany();
    }

    async deleteUser(id: number) {
        this.prisma.user.deleteMany({
            where: { id },
        });
    }
}