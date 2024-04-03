import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

async function createApp() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.enableCors();
    return app;
  } catch (error) {
    console.error('Error al crear la aplicación NestJS:', error);
    process.exit(1);
  }
}

async function startServer() {
  const app = await createApp();
  await app.listen(PORT);
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}

startServer();