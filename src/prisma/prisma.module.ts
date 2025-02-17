import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 🔹 Torna o PrismaModule global para evitar problemas de importação
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 🔹 Expõe o PrismaService para outros módulos
})
export class PrismaModule {}
