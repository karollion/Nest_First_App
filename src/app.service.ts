import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'John';
    const text = `Hello ${name}`;
    return text;
  }
}
