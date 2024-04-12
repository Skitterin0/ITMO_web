import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class OrderDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    totalPrice: Decimal;

    @ApiProperty()
    userId: number;
}