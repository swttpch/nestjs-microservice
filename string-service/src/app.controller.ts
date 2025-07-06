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

  @MessagePattern({ cmd: 'concat' })
  concatenateStrings(data: string[]): string {
    return data.join(' ');
  }

  @MessagePattern({ cmd: 'capitalize' })
  capitalizeString(data: string): string {
    return data.toUpperCase();
  }
}
