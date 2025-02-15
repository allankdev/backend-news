import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Exemplo: habilitar CORS se necessário
  // app.enableCors();
  
  await app.listen(3000);
  console.log(`Aplicação rodando em http://localhost:3000`);
}
bootstrap();
