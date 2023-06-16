import { Module } from '@nestjs/common';
import { Module1 } from "../module1/module1.module";
import { Job } from "./job";

@Module({
  imports: [Module1],
  providers: [Job]
})
export class JobModule {}
