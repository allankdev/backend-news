import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { AwardBadgeDto } from './badges.dto';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';

@Controller('badges')
@UseGuards(JwtAuthGuard)
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Get('mine')
  async myBadges(@Request() req) {
    const user = req.user;
    return this.badgesService.listUserBadges(user.id);
  }

  // Exemplo de rota para conceder badge
  @Post('award')
  async awardBadge(@Body() dto: AwardBadgeDto) {
    return this.badgesService.awardBadge(dto);
  }
}
