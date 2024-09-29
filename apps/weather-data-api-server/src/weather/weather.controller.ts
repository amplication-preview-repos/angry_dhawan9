import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeatherService } from "./weather.service";
import { WeatherControllerBase } from "./base/weather.controller.base";

@swagger.ApiTags("weathers")
@common.Controller("weathers")
export class WeatherController extends WeatherControllerBase {
  constructor(protected readonly service: WeatherService) {
    super(service);
  }
}
