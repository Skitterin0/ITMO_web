import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class CreateProductDto {
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