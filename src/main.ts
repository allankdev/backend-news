import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Define que todos os endpoints devem começar com /api
  app.setGlobalPrefix("api");

  // 🔥 Habilita CORS para permitir comunicação com o frontend
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:4000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 📌 Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API do meu projeto')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona suporte a autenticação JWT no Swagger
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 🔥 Define a porta do servidor a partir do .env (padrão: 3000)
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Server running on http://localhost:${PORT}/api`);
}

bootstrap();
