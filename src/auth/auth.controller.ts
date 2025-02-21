import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtAuthGuard } from './ jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req) {
    console.log('🔹 Token decodificado no request:', req.user);

    // Como o JwtStrategy retorna { userId: payload.sub, role: payload.role },
    // devemos utilizar req.user.userId
    if (!req.user || !req.user.userId) {
      console.error('❌ Nenhum usuário autenticado no request!');
      throw new UnauthorizedException('Usuário não autenticado.');
    }

    return this.authService.getUserById(req.user.userId);
  }
}
