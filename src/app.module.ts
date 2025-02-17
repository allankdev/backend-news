import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { StreaksModule } from './streaks/streaks.module';
import { ReadersModule } from './readers/readers.module';
import { NewslettersModule } from './newsletters/newsletters.module';
import { BadgesModule } from './badges/ badges.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    WebhooksModule,
    StreaksModule,
    ReadersModule,
    NewslettersModule,
    BadgesModule,
    AdminModule
  ],
})
export class AppModule {}
