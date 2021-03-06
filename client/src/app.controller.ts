import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    console.log(name);
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAsync(name: string): Promise<string> {
    return `Hello ${name}`;
  }
}
