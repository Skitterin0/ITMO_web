import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './product/dto/product.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {
  }
}
