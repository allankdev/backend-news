import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('readers')
@ApiBearerAuth()
@ApiTags('Readers')
@UseGuards(JwtAuthGuard)
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Get('my-newsletters')
  async myNewsletters(@Request() req) {
    console.log('🔹 Token decodificado no request:', req.user);
  
    if (!req.user || !req.user.userId) {
      console.error('❌ Nenhum usuário autenticado no request!');
      return { error: 'Usuário não autenticado' };
    }
  
    console.log('✅ ID do usuário autenticado:', req.user.userId);
    return this.readersService.getMyNewsletters(req.user.userId);
  }
  
}
