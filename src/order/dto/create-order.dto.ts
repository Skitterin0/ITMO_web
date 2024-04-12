import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class CreateOrderDto {
    @ApiProperty()
    totalPrice: Decimal;

    @ApiProperty()
    userId: number;
}