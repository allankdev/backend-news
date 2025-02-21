import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const { email, password } = dto;

    const userExists = await this.prisma.user.findUnique({ where: { email } });
    if (userExists) {
      throw new Error('Email já está em uso');
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashed,
        role: 'user', // 🔹 Garante que o usuário normal tem role "user"
      },
    });

    return { message: 'Usuário criado com sucesso', user };
  }

  async login(dto: LoginDto) {
    const { email, password } = dto;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new UnauthorizedException('Credenciais inválidas');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Credenciais inválidas');

    // 🔹 Agora o token inclui a role do usuário
    const token = this.jwtService.sign({ sub: user.id, role: user.role });

    console.log('✅ Token gerado:', token); // 🔍 DEBUG
    return { token };
  }
}