import { Module } from '@nestjs/common';
import { StreaksService } from './streaks.service';
import { StreaksController } from './streaks.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BadgesModule } from '../badges/ badges.module';

@Module({
  imports: [PrismaModule, BadgesModule], // 🔥 Agora o BadgesModule está disponível no StreaksModule
  controllers: [StreaksController], // ✅ Controller de Streaks
  providers: [StreaksService], // ✅ Registrando StreaksService
  exports: [StreaksService], // ✅ Exportando para uso em outros módulos
})
export class StreaksModule {}
