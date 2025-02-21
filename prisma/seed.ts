import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando Seed...');

  // 🔹 Criando Senha Criptografada
  const hashedPassword = await bcrypt.hash('123456', 10);

  // 🔹 Criando Usuários (Admin e Comuns)
  const users = await prisma.user.createMany({
    data: [
      { id: 'user1', email: 'user1@news.com', password: hashedPassword, role: 'user', streak: 3 },
      { id: 'user2', email: 'user2@news.com', password: hashedPassword, role: 'user', streak: 5 },
      { id: 'admin1', email: 'admin@news.com', password: hashedPassword, role: 'admin', streak: 0 }
    ],
    skipDuplicates: true, // Evita erro se o seed rodar mais de uma vez
  });

  console.log('✅ Usuários Criados!');

  // 🔹 Criando Newsletters com `id`
  const newsletters = await prisma.newsletter.createMany({
    data: [
      { id: 'news_1', resourceId: 'abc123', userId: 'user1' },
      { id: 'news_2', resourceId: 'def456', userId: 'user1' },
      { id: 'news_3', resourceId: 'ghi789', userId: 'user2' }
    ],
    skipDuplicates: true,
  });

  console.log('✅ Newsletters Criadas!');

  // 🔹 Criando Registros de Abertura de Newsletters pelos Usuários
  await prisma.newsletter.createMany({
    data: [
      { id: 'news_open_1', resourceId: 'abc123', userId: 'user1' },
      { id: 'news_open_2', resourceId: 'def456', userId: 'user1' },
      { id: 'news_open_3', resourceId: 'ghi789', userId: 'user2' }
    ],
    skipDuplicates: true,
  });

  console.log('✅ Newsletters Abertas pelos Usuários!');

  // 🔹 Criando Badges para Usuários Ativos
  await prisma.badge.createMany({
    data: [
      { id: 'badge_1', userId: 'user1', badgeType: 'Leitor Iniciante' },
      { id: 'badge_2', userId: 'user2', badgeType: 'Leitor Avançado' }
    ],
    skipDuplicates: true,
  });

  console.log('✅ Badges Criadas!');

  console.log('🌱 Seed Executada Com Sucesso!');
}

// Executa o Seed
main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
