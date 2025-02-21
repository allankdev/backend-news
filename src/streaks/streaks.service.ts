import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class StreaksService {
  constructor(private prisma: PrismaService, private badgesService: BadgesService) {}

  // ✅ Obtém o streak do usuário
  async getStreak(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { streak: true, lastOpened: true },
    });

    if (!user) throw new Error('Usuário não encontrado');

    return {
      streak: user.streak,
      lastOpened: user.lastOpened,
    };
  }

  // ✅ Atualiza o streak e concede badges automaticamente
  async updateStreak(userId: string, openedDate: Date) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('Usuário não encontrado');

    const { lastOpened, streak } = user;
    let newStreak = 1;

    if (lastOpened) {
      const lastOpenedDate = new Date(lastOpened);
      const diffMs = openedDate.getTime() - lastOpenedDate.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        newStreak = streak + 1;
      } else if (diffDays === 2 && lastOpenedDate.getDay() === 6 && openedDate.getDay() === 1) {
        newStreak = streak + 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    // 🔥 Verifica se deve conceder um badge
    await this.checkAndAwardBadge(userId, newStreak);

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        streak: newStreak,
        lastOpened: openedDate,
      },
    });
  }

  // ✅ Verifica se o usuário deve ganhar um novo badge
  private async checkAndAwardBadge(userId: string, streak: number) {
    const milestones = [
      { streak: 3, badgeType: "Leitor Iniciante" },
      { streak: 7, badgeType: "Engajado" },
      { streak: 14, badgeType: "Dedicado" },
      { streak: 30, badgeType: "Mestre das Newsletters" },
    ];

    for (const milestone of milestones) {
      if (streak === milestone.streak) {
        await this.badgesService.awardBadge({ userId, badgeType: milestone.badgeType });
        console.log(`🏆 Badge "${milestone.badgeType}" concedido ao usuário ${userId}`);
      }
    }
  }
}
