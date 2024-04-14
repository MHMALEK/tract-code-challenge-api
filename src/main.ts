import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(AppModule.globalPrefix);
  // This is not good idea! But just for sake of code challenge example
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
