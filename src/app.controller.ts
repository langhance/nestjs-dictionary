import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Const } from './x/const';

@Controller(Const.api_rest_v1)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIntro(): string {
    return this.appService.getIntro();
  }

}
