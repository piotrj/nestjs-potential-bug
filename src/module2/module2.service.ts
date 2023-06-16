import { Injectable } from '@nestjs/common';
import { Module2Dependency } from "./module2.dependency";

@Injectable()
export class Module2Service {
  constructor(private readonly dependency: Module2Dependency) { }

  run() {
    this.dependency.hello()
  }
}

