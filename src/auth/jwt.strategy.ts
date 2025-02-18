// jwt.strategy.ts
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
    console.log('🔹 Token decodificado no JwtStrategy:', payload); // DEBUG
    if (!payload || !payload.sub || !payload.role) {
      throw new UnauthorizedException('Token JWT inválido.');
    }
    // Os dados retornados aqui serão injetados no request.user
    return { userId: payload.sub, role: payload.role };
  }
}
