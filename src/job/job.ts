import { Injectable } from '@nestjs/common';
import { Module1Service } from "../module1/module1.service";
import { Module2Service } from "../module2/module2.service";

@Injectable()
export class Job {
  constructor(private readonly module1service: Module1Service,
              private readonly module2service: Module2Service) {
              }
}
