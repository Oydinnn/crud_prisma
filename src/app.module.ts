import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middle';
import { Log } from './middleware/log.middleware';
import { PrismaService } from './core/database/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [PrismaService, UsersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, Log)
      .exclude({path: "users", method: RequestMethod.POST})
      .forRoutes("*")
  }
}
