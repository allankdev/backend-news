import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { StreaksService } from './streaks.service';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Streaks')
@Controller('streaks')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class StreaksController {
  constructor(private readonly streaksService: StreaksService) {}

  // ✅ Retorna o streak atual do usuário logado
  
  @Get('me')
  async getMyStreak(@Request() req) {
    return this.streaksService.getStreak(req.user.userId);
  }

  // ✅ Atualiza manualmente o streak do usuário com base na abertura da newsletter
  @Patch('update')
  async updateStreak(@Body() body: { userId: string; openedDate: Date }) {
    return this.streaksService.updateStreak(body.userId, new Date(body.openedDate));
  }
}
