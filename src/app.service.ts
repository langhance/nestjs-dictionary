import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIntro(): string {
    return 'this is a intro!';
  }
}
