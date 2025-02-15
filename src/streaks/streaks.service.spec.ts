// src/streaks/streaks.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { StreaksService } from './streaks.service';
import { PrismaService } from '../prisma/prisma.service';

describe('StreaksService', () => {
  let service: StreaksService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreaksService, PrismaService],
    }).compile();

    service = module.get<StreaksService>(StreaksService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should update streak correctly', async () => {
    // Mock do Prisma e testes aqui
  });
});