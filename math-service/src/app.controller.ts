import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'sum' })
  calculateSum(data: number[]): number {
    return data.reduce((a, b) => a + b, 0);
  }

  @MessagePattern({ cmd: 'multiply' })
  calculateProduct(data: number[]): number {
    return data.reduce((a, b) => a * b, 1);
  }
}
