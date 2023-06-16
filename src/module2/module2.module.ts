import { Module } from '@nestjs/common';
import { Module2Service } from './module2.service';
import { Module2Dependency } from './module2.dependency';

@Module({
  providers: [Module2Dependency, Module2Service],
  exports: [Module2Service]
})
export class Module2 {}
