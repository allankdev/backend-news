import { Body, Controller, Post, Headers, UnauthorizedException } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { BeehiivWebhookDto } from './webhooks.dto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('beehiiv')
  async handleBeehiiv(
    @Headers('x-beehiiv-signature') signature: string, // 🛑 Captura o token do header
    @Body() data: BeehiivWebhookDto
  ) {
    if (process.env.BEEHIIV_WEBHOOK_SECRET && signature !== process.env.BEEHIIV_WEBHOOK_SECRET) {
      throw new UnauthorizedException('Webhook não autorizado'); // ❌ Bloqueia requisições inválidas
    }

    return this.webhooksService.processBeehiivWebhook(data);
  }
}