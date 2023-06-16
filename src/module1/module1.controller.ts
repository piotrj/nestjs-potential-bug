import { Controller, Get } from '@nestjs/common';
import { Module1Service } from './module1.service';

@Controller()
export class Module1Controller {
  constructor(private readonly service: Module1Service) {}

  @Get("/run")
  run(): void {
    this.service.run();
  }
}
