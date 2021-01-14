import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({ required: true, example: '1', description: '' })
  @IsString()
  categoryId: number;

  @ApiProperty({ required: true, example: 'olas', description: '' })
  @IsString()
  name: string;

  @ApiProperty({ required: true, example: 'olas', description: '' })
  @IsString()
  question: string;

  @ApiProperty({ required: false, example: 'olas', description: '' })
  @IsString()
  @IsOptional()
  tips?: string;
}
