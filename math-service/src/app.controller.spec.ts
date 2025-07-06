import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('math test', () => {
    it('should sum', () => {
      expect(appController.calculateSum([1, 2, 3])).toBe(6);
    });

    it('should multiply', () => {
      expect(appController.calculateProduct([1, 2, 3])).toBe(6);
    });
  });
});
