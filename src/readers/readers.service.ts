import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReadersService {
  constructor(private prisma: PrismaService) {}

  async getMyData(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        email: true,
        streak: true,
        lastOpened: true,
        createdAt: true,
        updatedAt: true
      },
    });
  }

  async getMyNewsletters(userId: string) {
    return this.prisma.newsletter.findMany({
      where: { userId },
      orderBy: { openedAt: 'desc' },
    });
  }
}
