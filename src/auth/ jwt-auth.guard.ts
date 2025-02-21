// jwt-auth.guard.ts
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    console.log('🔹 Token recebido no header:', authHeader);

    if (!authHeader) {
      console.error('❌ Token JWT não foi enviado no header!');
      throw new UnauthorizedException('Token JWT não fornecido.');
    }

    

    // Aqui, a implementação padrão do AuthGuard fará:
    // 1. Extração do token (usando ExtractJwt.fromAuthHeaderAsBearerToken())
    // 2. Validação do token via JwtStrategy
    return super.canActivate(context);
  }
  
}
