import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocab } from './vocab.entity';

@Injectable()
export class VocabService {
  constructor(
    @InjectRepository(Vocab)
    private readonly vocabRepository: Repository<Vocab>,
  ) {}

  // async findAll(): Promise<Vocab[]> {
  //   return this.vocabRepository.find();
  // }

  async findByTitle(title: string): Promise<Vocab> {

    // return this.vocabRepository.query(`SELECT * FROM "VOCABS" WHERE title=${title} LIMIT 1;`)

    return this.vocabRepository.findOne({
      where: {
        title: title
      },
    });
  }

  // Add other CRUD methods as needed
}
