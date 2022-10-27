import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): any {
    return [
      {
        name: 'Tolu',
        age: 4,
      },
      {
        name: 'Ade',
        age: 5,
      },
    ];
  }
}
