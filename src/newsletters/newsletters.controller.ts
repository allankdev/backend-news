import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NewslettersService } from './newsletters.service';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';

@ApiTags('Newsletters')
@ApiBearerAuth()
@Controller('newsletters')
@UseGuards(JwtAuthGuard)
export class NewslettersController {
  constructor(private readonly newslettersService: NewslettersService) {}

  @Get()
  async listAll() {
    return this.newslettersService.listAll();
  }

  @Get(':resourceId')
  async getByResourceId(@Param('resourceId') resourceId: string) {
    return this.newslettersService.findByResourceId(resourceId);
  }
}
