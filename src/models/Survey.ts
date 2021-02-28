import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('surveys')
export default class Survey extends BaseEntity  {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    super();
    if(!this.id) {
      this.id = uuid();
    }
  }

}