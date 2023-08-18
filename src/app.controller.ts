import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dis')
  dis(): string {
    return 'dkm';
  }

  @Get('dis22')
  diss(): string {
    return 'dkm2';
  }
}
