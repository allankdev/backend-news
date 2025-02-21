import { Module } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgesController } from './badges.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // ✅ Garante que o Prisma está disponível
  controllers: [BadgesController], // ✅ Controller dos Badges
  providers: [BadgesService], // ✅ Serviço de badges registrado
  exports: [BadgesService], // 🔥 Exportamos o serviço para que outros módulos possam utilizá-lo
})
export class BadgesModule {}
