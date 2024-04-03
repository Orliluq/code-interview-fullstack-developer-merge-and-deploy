/* eslint-disable prettier/prettier */
import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;
let app: any;

async function createApp() {
  try {
    app = await NestFactory.create(AppModule, { cors: true });
    app.enableCors();
    return app;
  } catch (error) {
    console.error('Error al crear la aplicación NestJS:', error);
    process.exit(1);
  }
}

export const startServer = functions.https.onRequest(async (req, res) => {
  if (!app) {
    app = await createApp();
  }
  await app.listen(process.env.PORT || 3000);
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  res.send('Hello from NestJS!');
});