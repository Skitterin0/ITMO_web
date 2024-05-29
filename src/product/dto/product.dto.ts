import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class ProductDto implements Product {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: Decimal;

    @ApiProperty()
    size: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    description: string;
}