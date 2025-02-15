import { Controller, Get, Param } from '@nestjs/common';
import { NewslettersService } from './newsletters.service';

@Controller('newsletters')
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
