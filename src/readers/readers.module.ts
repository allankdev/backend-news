import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReadersController],
  providers: [ReadersService, PrismaService],
})
export class ReadersModule {}