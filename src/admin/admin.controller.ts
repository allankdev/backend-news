import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/ jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';

@ApiTags('Admin')
@UseGuards(JwtAuthGuard, RoleGuard) // Protege com JWT + Apenas Admins
@ApiBearerAuth()
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Retorna o ranking dos usuários mais engajados
  @Get('ranking')
  async getRanking() {
    return this.adminService.getRanking();
  }

  // Retorna estatísticas gerais da plataforma
  @Get('stats')
  async getStats() {
    return this.adminService.getStats();
  }
}
