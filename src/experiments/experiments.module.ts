import { Module } from '@nestjs/common';
import { ExperimentsController } from './experiments.controller';
import { ExperimentService } from './experiments.service';

@Module({
  controllers: [ExperimentsController],
  providers: [ExperimentService],
})
export class ExperimentsModule {}

