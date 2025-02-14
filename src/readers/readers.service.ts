import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReadersService {
  constructor(private prisma: PrismaService) {}

  async getReader(email: string) {
    return this.prisma.reader.findUnique({ where: { email } });
  }
}