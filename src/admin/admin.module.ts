import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module'; // ✅ Importamos o AuthModule para ter acesso ao JwtService
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule], // ✅ Agora temos acesso ao `JwtService`
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
