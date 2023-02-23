import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Get('/news')
  getAllnews(): any {
    return this.appService.news();
  }

  @HttpCode(200)
  @Get('/news/:source')
  getAllNewsBySource(@Param() param: any) {
    return this.appService.newsBySource(param.source);
  }

  @HttpCode(200)
  @Post('/listen')
  listen(@Body() body: any) {
    return this.appService.listen(body);
  }
}
