import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StreaksService {
  constructor(private prisma: PrismaService) {}

  // ✅ Retorna o streak do usuário
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

  // ✅ Atualiza o streak do usuário com base na abertura de uma newsletter
  async updateStreak(userId: string, openedDate: Date) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('Usuário não encontrado');

    const { lastOpened, streak } = user;
    let newStreak = 1;

    if (lastOpened) {
      const lastOpenedDate = new Date(lastOpened);
      const diffMs = openedDate.getTime() - lastOpenedDate.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);

      // ✅ Se abriu no dia seguinte, continua o streak
      if (diffDays === 1) {
        newStreak = streak + 1;
      } 
      // ✅ Se pulou um dia (domingo), não reseta o streak
      else if (diffDays === 2 && lastOpenedDate.getDay() === 6 && openedDate.getDay() === 1) {
        newStreak = streak + 1;
      }
      // ❌ Se perdeu mais de um dia sem abrir, streak reseta para 1
      else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        streak: newStreak,
        lastOpened: openedDate,
      },
    });
  }
}
