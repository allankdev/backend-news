import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReadersController],
  providers: [ReadersService],
})
export class ReadersModule {}
