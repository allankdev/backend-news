import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StreaksService {
  constructor(private prisma: PrismaService) {}

  async updateStreak(userId: string, openedDate: Date) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) return;

    const { lastOpened, streak } = user;

    let newStreak = 1;
    if (lastOpened) {
      const diffMs = openedDate.getTime() - lastOpened.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);

      // Exemplo simples: se abriu no dia seguinte, incrementa
      if (diffDays <= 1.5) {
        newStreak = streak + 1;
      }

      // Aqui você poderia pular domingo
      // (Se lastOpened foi sabado e openedDate foi segunda, etc.)
      // Exemplo (pseudo):
      // if (lastOpened.getDay() === 6 && openedDate.getDay() === 1) {
      //   newStreak = streak + 1;
      // }
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        streak: newStreak,
        lastOpened: openedDate,
      },
    });
  }
}
