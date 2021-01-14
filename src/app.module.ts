import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DemoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
