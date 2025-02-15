import { Body, Controller, Post } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { BeehiivWebhookDto } from './webhooks.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('beehiiv')
  async handleBeehiiv(@Body() data: BeehiivWebhookDto) {
    return this.webhooksService.processBeehiivWebhook(data);
  }
}
