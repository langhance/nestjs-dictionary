import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vocab } from './modules/vocabs/vocab.entity';

import { VocabController } from './modules/vocabs/vocab.controller';
import { VocabService } from './modules/vocabs/vocab.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vocab]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'assets/db/en_en_vocabs.db',
      entities: [Vocab],
      synchronize: false, // true: Auto-create tables based on entities (use cautiously in production)
    }),
  ],
  controllers: [AppController, VocabController],
  providers: [AppService, VocabService],
})
export class AppModule {}
