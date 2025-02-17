import { Injectable, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    console.log('🔹 Token recebido no header:', authHeader);

    if (!authHeader) {
      console.error('❌ Token JWT não foi enviado no header!');
      throw new UnauthorizedException('Token JWT não fornecido.');
    }

    const token = authHeader.split(' ')[1]; // Remove "Bearer"
    if (!token) {
      console.error('❌ O token JWT está em um formato inválido!');
      throw new UnauthorizedException('Formato do token JWT inválido.');
    }

    try {
      const decoded = this.jwtService.verify(token); // ✅ Agora o `JwtService` está injetado corretamente
      console.log('✅ Token decodificado:', decoded);
      request.user = decoded; // ✅ Injeta os dados do usuário no request
      return true;
    } catch (error) {
      console.error('❌ Erro ao verificar token:', error);
      throw new UnauthorizedException('Token JWT inválido.');
    }
  }
}
