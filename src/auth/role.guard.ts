// role.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('🔍 Usuário recebido no RoleGuard:', user); // DEBUG

    // Verifica se o usuário está presente no request
    if (!user) {
      console.error('❌ Erro: Nenhum usuário foi encontrado no request.');
      throw new ForbiddenException('Usuário não autenticado.');
    }

    // Verifica se a role do usuário foi definida
    if (!user.role) {
      console.error('❌ Erro: Role do usuário não encontrada.');
      throw new ForbiddenException('Usuário não autenticado.');
    }

    // Verifica se a role do usuário é 'admin'
    if (user.role !== 'admin') {
      console.error(`❌ Acesso negado: Usuário "${user.userId}" não tem permissão de admin. Role atual: ${user.role}`);
      throw new ForbiddenException('Acesso negado: você não tem permissão para acessar este recurso.');
    }

    console.log('✅ Usuário autenticado como admin, acesso permitido.');
    return true;
  }
}
