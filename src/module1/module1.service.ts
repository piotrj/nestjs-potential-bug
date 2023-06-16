import { Injectable } from '@nestjs/common';
import { Job } from '../job/job';

@Injectable()
export class Module1Service {
  run() {
    console.log(Job);
  }
}

