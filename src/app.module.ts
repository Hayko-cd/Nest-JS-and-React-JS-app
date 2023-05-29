import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperimentsModule } from './experiments/experiments.module';

@Module({
  imports: [ExperimentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
