import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';

@Controller()
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  // ✅ Webhook para processar as aberturas do The News (sem autenticação)
  @Get()
  async handleTheNewsWebhook(
    @Query('email') email: string,
    @Query('id') id?: string
  ) {
    console.log(`📩 Webhook recebido: email=${email}, id=${id}`);

    if (!email) {
      throw new BadRequestException('O campo "email" é obrigatório!');
    }

    return this.webhooksService.processBeehiivWebhook({ email, id });
  }
}
