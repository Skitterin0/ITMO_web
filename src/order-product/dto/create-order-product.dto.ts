import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderProductDto {
    @ApiProperty()
    orderId: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    productId: number;
}