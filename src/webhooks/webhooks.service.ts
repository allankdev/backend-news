import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StreaksService } from '../streaks/streaks.service';
import { BeehiivWebhookDto } from './webhooks.dto';

@Injectable()
export class WebhooksService {
  constructor(
    private prisma: PrismaService,
    private streaksService: StreaksService,
  ) {}

  async processBeehiivWebhook(data: BeehiivWebhookDto) {
    // 1) Encontrar ou criar usuário
    let user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: data.email,
        },
      });
    }

    // 2) Criar "newsletter" que representa a abertura
    const openedDate = new Date();
    await this.prisma.newsletter.create({
      data: {
        resourceId: data.id,
        userId: user.id,
        openedAt: openedDate,
      },
    });

    // 3) Atualizar streak
    await this.streaksService.updateStreak(user.id, openedDate);

    // Retorna algo
    return { success: true };
  }
}
