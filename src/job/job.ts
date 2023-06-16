import { Injectable } from '@nestjs/common';
import { Module1Service } from "../module1/module1.service";

@Injectable()
export class Job {
  constructor(private readonly module1service: Module1Service) {
              }
}
