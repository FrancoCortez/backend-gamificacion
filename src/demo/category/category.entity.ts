import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuestionEntity } from '../question/question.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'update_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'name', type: 'varchar', nullable: false, length: 50 })
  name: string;

  @OneToMany('QuestionEntity', 'category')
  questions: QuestionEntity[];
}
