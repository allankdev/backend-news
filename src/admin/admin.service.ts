import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // Retorna os leitores mais engajados (excluindo admins)
  async getRanking() {
    return this.prisma.user.findMany({
      where: { role: "user" }, 
      orderBy: { streak: 'desc' },
      take: 10,
      select: {
        id: true,
        email: true,
        streak: true,
        lastOpened: true,
      },
    });
  }

  // Retorna estatísticas gerais do sistema
  async getStats() {
    const totalUsers = await this.prisma.user.count({ where: { role: "user" } });
    const totalNewslettersOpened = await this.prisma.newsletter.count();
    const topUser = await this.prisma.user.findFirst({
      where: { role: "user" },
      orderBy: { streak: 'desc' },
      select: { email: true, streak: true },
    });

    return {
      totalUsers,
      totalNewslettersOpened,
      topUser,
    };
  }
}
