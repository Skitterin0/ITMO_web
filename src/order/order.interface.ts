import { Decimal } from "@prisma/client/runtime/library";

export interface Order {
    id: number;
    totalPrice: Decimal;
    userId: number;
}