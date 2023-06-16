import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module1 } from "./module1/module1.module";
import { Module2 } from "./module2/module2.module";
import { JobModule } from "./job/job.module";

@Module({
  imports: [Module1, Module2, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
