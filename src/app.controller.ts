import { ConflictException, Controller, Get, HttpException, HttpStatus, Param, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilters } from './filter/exception.handler';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":id")
  @UseFilters(HttpExceptionFilters)
  getHello(@Param("id") id: number) {
    if(id != 5){
      throw new HttpException('forbidden', HttpStatus.CREATED)
    }
    return this.appService.getHello();
  }

}
