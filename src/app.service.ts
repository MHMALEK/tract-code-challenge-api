import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tract People! This is a simple NestJS App to provide some APIs to help Frontend with mock data';
  }
}
