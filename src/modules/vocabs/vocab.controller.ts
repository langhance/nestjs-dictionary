import { Controller, Get, Param, Query } from '@nestjs/common';
import { VocabService } from './vocab.service';
import { Vocab } from './vocab.entity';
import { Const } from 'src/x/const';
import { Stats } from './model/stats';

@Controller(`${Const.api_rest_v1}/vocabs`)
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  @Get('search')
  async awaitVocab(@Query('title') title: string): Promise<Vocab | null> {
    const data = await this.vocabService.findByTitle(title);
    return data;
  }

  @Get('stats')
  async awaitStats(): Promise<Stats | null> {

    const total = await this.vocabService.countAll()

    let w1c = await this.vocabService.countWordByLength(1);
    let w2c = await this.vocabService.countWordByLength(2);
    let w3c = await this.vocabService.countWordByLength(3);
    let w4c = await this.vocabService.countWordByLength(4);
    let w5c = await this.vocabService.countWordByLength(5);
    let w6c = await this.vocabService.countWordByLength(6);
    let w7c = await this.vocabService.countWordByLength(7);
    let w8c = await this.vocabService.countWordByLength(8);
    let w9c = await this.vocabService.countWordByLength(9);

    w1c = w1c[0]['COUNT(1)']
    w2c = w2c[0]['COUNT(1)']
    w3c = w3c[0]['COUNT(1)']
    w4c = w4c[0]['COUNT(1)']
    w5c = w5c[0]['COUNT(1)']
    w6c = w6c[0]['COUNT(1)']
    w7c = w7c[0]['COUNT(1)']
    w8c = w8c[0]['COUNT(1)']
    w9c = w9c[0]['COUNT(1)']
    

    const stats: Stats = {
      word_count: total,
      word_1_char: w1c,
      word_2_char: w2c,
      word_3_char: w3c,
      word_4_char: w4c,
      word_5_char: w5c,
      word_6_char: w6c,
      word_7_char: w7c,
      word_8_char: w8c,
      word_9_char: w9c,
      word_9plus_char: total - w1c - w2c - w3c - w4c - w5c- w6c - w7c - w8c - w9c
    }
    return stats;
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
