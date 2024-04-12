import { ApiProperty } from '@nestjs/swagger';

export class OrderProductDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    orderId: number;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    productId: number;
}