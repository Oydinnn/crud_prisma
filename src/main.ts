import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilters } from './filter/exception.handler';
import { Log } from './middleware/log.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilters())
  app.use(Log)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
