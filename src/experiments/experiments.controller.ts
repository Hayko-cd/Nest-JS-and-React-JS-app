import { Controller, Get, Headers } from "@nestjs/common";
import { ExperimentService } from './experiments.service';

@Controller('experiments')
export class ExperimentsController {
  constructor(private readonly experimentService: ExperimentService) {}

  @Get()
  async getAllExperiments(@Headers('device-token') deviceToken: string, @Headers('price-token') priceToken: string) {
    return this.experimentService.getExperimentsByDeviceToken(deviceToken, priceToken);
  }
}
