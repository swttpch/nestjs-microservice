import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('math')
  async getMath(): Promise<number> {
    return await this.appService.calculateSum([1, 2, 3, 4]);
  }

  @Get('string/:string')
  async getString(@Param('string') string: string): Promise<string> {
    return await this.appService.capitalizeString(string);
  }
}
