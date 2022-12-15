import { INestApplication, Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const bootstrap: () => Promise<void> = async () => {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const apiUrl: URL = new URL(globalPrefix, 'http://localhost');
  apiUrl.port = process.env.PORT || '7779';

  await app.listen(apiUrl.port, () => {
    Logger.log(`Interest Rate API available at ${apiUrl}`);
  });
};
bootstrap();
