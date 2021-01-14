import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CategoryService } from '../category/category.service';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const newQuestionCreate = await this.fillQuestion(createQuestionDto);
    return this.questionRepository.save(newQuestionCreate);
  }

  private async fillQuestion(
    questionDto: CreateQuestionDto | UpdateQuestionDto,
  ) {
    const newQuestionCreate = new QuestionEntity();
    newQuestionCreate.name = questionDto.name;
    newQuestionCreate.question = questionDto.question;
    newQuestionCreate.tips = questionDto.tips;
    newQuestionCreate.category = await this.categoryService.findById(
      questionDto.categoryId,
    );
    return newQuestionCreate;
  }

  getAll() {
    return this.questionRepository
      .createQueryBuilder('question')
      .innerJoinAndSelect('question.category', 'category')
      .getMany();
  }

  getOne(id: number) {
    return this.questionRepository
      .createQueryBuilder('question')
      .innerJoinAndSelect('question.category', 'category')
      .where('question.id = :id', { id })
      .getOne();
  }

  async update(id: number, question: UpdateQuestionDto) {
    const updateQuestion = await this.fillQuestion(question);
    return this.questionRepository.save(updateQuestion);
  }

  delete(id: number) {
    return this.questionRepository.delete(id);
  }
}
