import { Injectable } from '@nestjs/common';

@Injectable()
export class Module2Dependency {
  hello() {
    console.log("HELLO");
  }
}


