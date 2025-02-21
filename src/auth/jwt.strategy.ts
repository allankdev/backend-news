import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'minha-chave-secreta',
    });
  }

  async validate(payload: any) {
    console.log('🔹 Token decodificado no JwtStrategy:', payload); // 🔍 DEBUG

    if (!payload || !payload.sub) {
      console.error('❌ Erro: Payload JWT inválido.');
      throw new UnauthorizedException('Token JWT inválido.');
    }

    if (!payload.role) {
      console.error('❌ Erro: Role não encontrada no token.');
      throw new UnauthorizedException('Token JWT inválido.');
    }

    return { userId: payload.sub, role: payload.role };
  }
}
