import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    PrismaModule, // ✅ Importamos o PrismaModule para acessar o PrismaService
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'minha-chave-secreta',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule], // ✅ Exportamos o `JwtModule` para outros módulos usarem
})
export class AuthModule {}
