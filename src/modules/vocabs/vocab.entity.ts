import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'VOCABS'})
export class Vocab {

  @PrimaryColumn({name:'id'})
  id: number;

  @Column({name: 'title'})
  title: string;

  @Column({name: 'content_json'})
  content_json: string;

}
