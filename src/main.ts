import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const port = 3000;
  logger.log(`Application Listening on port ${port}`)
}
bootstrap();
