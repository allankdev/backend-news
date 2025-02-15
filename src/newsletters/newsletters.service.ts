import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NewslettersService {
  constructor(private prisma: PrismaService) {}

  async listAll() {
    return this.prisma.newsletter.findMany();
  }

  async findByResourceId(resourceId: string) {
    return this.prisma.newsletter.findFirst({
      where: { resourceId },
    });
  }
}
