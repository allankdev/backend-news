import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadersModule } from './readers/readers.module';
import { NewslettersModule } from './newsletters/newsletters.module';
import { StreaksModule } from './streaks/streaks.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ReadersModule, NewslettersModule, StreaksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
