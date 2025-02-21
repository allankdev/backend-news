import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 10);

  await prisma.user.createMany({
    data: [
      { email: 'admin@news.com', password: hashedPassword, role: 'admin' },
      { email: 'user1@news.com', password: hashedPassword, role: 'user' },
      { email: 'user2@news.com', password: hashedPassword, role: 'user' }
    ],
  });

  console.log('🌱 Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
