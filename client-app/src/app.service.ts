import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private mathClient: ClientProxy;
  private stringClient: ClientProxy;

  constructor() {
    this.mathClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    });
    this.stringClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002,
      },
    });
  }

  async calculateSum(numbers: number[]): Promise<number> {
    const res = await firstValueFrom<number>(
      this.mathClient.send({ cmd: 'sum' }, numbers),
    );
    return res;
  }

  async capitalizeString(value: string): Promise<string> {
    const res = await firstValueFrom<string>(
      this.stringClient.send({ cmd: 'capitalize' }, value),
    );
    return res;
  }
}
