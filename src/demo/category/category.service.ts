import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  findById(categoryId: number) {
    return this.categoryRepository.findOne({ where: { id: categoryId } });
  }

  getAll() {
    return this.categoryRepository.find();
  }
}
