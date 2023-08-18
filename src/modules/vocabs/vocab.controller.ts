import { Controller, Get, Param } from '@nestjs/common';
import { VocabService } from './vocab.service';
import { Vocab } from './vocab.entity';
import { delay } from 'rxjs';

@Controller('v1/vocabs')
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  // @Get()
  // subscribeAll(): string {
  //   // return this.vocabService.findAll();
  //   return 'hello';
  // }

  @Get('search')
  async awaitVocab(@Param('title') title: string): Promise<Vocab | null> {
    const d = await this.vocabService.findByTitle(title);

    console.log(`data = ${d.title} - ${d.content_json}`);

    return d;
  }

  @Get('test')
  async awaitTest(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('test succeed');
      }, 1000);
    });
  }
}
