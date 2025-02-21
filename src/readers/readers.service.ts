import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReadersService {
  constructor(private prisma: PrismaService) {}

  async getMyNewsletters(userId: string) {
    console.log('🔹 Buscando dados do usuário com ID:', userId);

    if (!userId) {
      console.error('❌ ID do usuário está indefinido!');
      throw new Error('ID do usuário inválido.');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true, // Adiciona ID para verificar se o usuário existe
        streak: true,
        lastOpened: true,
        newsletters: {
          select: {
            id: true,
            resourceId: true,
            openedAt: true,
          },
        },
      },
    });

    if (!user) {
      console.error('❌ Nenhum usuário encontrado no banco de dados!');
      return { error: 'Usuário não encontrado.' };
    }

    console.log('✅ Usuário encontrado:', user);
    return {
      id: user.id,
      streak: user.streak,
      lastOpened: user.lastOpened,
      newsletters: user.newsletters,
    };
  }
}
