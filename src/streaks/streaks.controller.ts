import { Controller, Patch, Body } from '@nestjs/common';
import { StreaksService } from './streaks.service';

@Controller('streaks')
export class StreaksController {
  constructor(private readonly streaksService: StreaksService) {}

  // Exemplo: endpoint para forçar atualização de streak (manual).
  @Patch('update')
  async updateStreak(@Body() body: { userId: string; openedDate: Date }) {
    return this.streaksService.updateStreak(body.userId, new Date(body.openedDate));
  }
}
