import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {
    }

    async createProduct(product: CreateProductDto): Promise<ProductDto> {
        return this.prisma.product.create({
            data: product,
        });
    }

    async updateProduct(id: number, product: UpdateProductDto): Promise<ProductDto> {
        const existingProduct = await this.prisma.product.findUnique({
            where: { id: id },
        });

        return this.prisma.product.update({
            where: {id: id},
            data: product,
        })
    }

    async findAllProducts(): Promise<ProductDto[]> {
        return this.prisma.product.findMany();
     }

    async findProduct(id: number): Promise<ProductDto> {
        return this.prisma.product.findUnique({
            where: { id: id },
        });
    }

}
