import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AwardBadgeDto } from './badges.dto';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}

  async listUserBadges(userId: string) {
    return this.prisma.badge.findMany({
      where: { userId },
      orderBy: { earnedAt: 'desc' },
    });
  }

  async awardBadge(dto: AwardBadgeDto) {
    // Exemplo de conceder um badge
    return this.prisma.badge.create({
      data: {
        userId: dto.userId,
        badgeType: dto.badgeType,
      },
    });
  }
}
