import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './question/question.entity';
import { QuestionService } from './question/question.service';
import { QuestionController } from './question/question.controller';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryEntity } from './category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity, CategoryEntity])],
  controllers: [QuestionController, CategoryController],
  exports: [QuestionService, CategoryService],
  providers: [QuestionService, CategoryService],
})
export class DemoModule {}
