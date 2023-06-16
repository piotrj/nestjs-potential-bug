import { Module } from '@nestjs/common';
import { Module1 } from "../module1/module1.module";
import { Module2 } from "../module2/module2.module";
import { Job } from "./job";

@Module({
  imports: [Module1, Module2],
  providers: [Job]
})
export class JobModule {}
