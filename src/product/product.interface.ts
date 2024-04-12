import { Decimal } from "@prisma/client/runtime/library";

export interface Product {
    description: string;
    id: number;
    name: string;
    price: Decimal;
    size: number;
}