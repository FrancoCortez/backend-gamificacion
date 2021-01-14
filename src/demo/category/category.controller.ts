import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }
}
