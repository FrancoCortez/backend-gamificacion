import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('v1/question')
@ApiTags('question-v1')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiOperation({
    operationId: 'createQuestion',
    summary: 'Create one question',
    description: '',
  })
  create(@Body() question: CreateQuestionDto) {
    return this.questionService.create(question);
  }

  @Put(':id')
  update(@Body() question: UpdateQuestionDto, @Param('id') id: number) {
    return this.questionService.update(id, question);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.questionService.delete(id);
  }

  @Get()
  @ApiOkResponse({
    description: 'Get all question',
  })
  @ApiOperation({
    operationId: 'getQuestion',
    summary: 'Get all question',
    description: '',
  })
  getAll() {
    return this.questionService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get one question',
  })
  @ApiOperation({
    operationId: 'getOneQuestion',
    summary: 'Get one question',
    description: '',
  })
  getOne(@Param('id') id: number) {
    return this.questionService.getOne(id);
  }
}
