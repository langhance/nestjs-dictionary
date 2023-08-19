import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocab } from './vocab.entity';
import { title } from 'process';

@Injectable()
export class VocabService {
  constructor(
    @InjectRepository(Vocab)
    private readonly vocabRepository: Repository<Vocab>,
  ) {}

  // async findAll(): Promise<Vocab[]> {
  //   return this.vocabRepository.find();
  // }

  async countAll(): Promise<number> {
    return this.vocabRepository.count();
  }

  async countWordByLength(length: number): Promise<number> {
    return this.vocabRepository.query(this.getSizeByWordLengthQuery(length));
  }

  private getSizeByWordLengthQuery(size:number): string {
    return `SELECT COUNT(1) FROM VOCABS WHERE length(title)=${size}`;
  }

  async findByTitle(title: string): Promise<Vocab> {
    return this.vocabRepository.findOne({
      where: {
        title: title,
      },
    });
  }
}
