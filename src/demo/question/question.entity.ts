import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'update_at', nullable: true })
  updatedAt: Date;

  @Column({ name: 'name', type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ name: 'question', type: 'text', nullable: false })
  question: string;

  @Column({ name: 'tips', type: 'varchar', nullable: false, length: 300 })
  tips?: string;

  @ManyToOne('CategoryEntity', 'questions')
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
