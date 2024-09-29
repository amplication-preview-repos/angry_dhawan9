import { Module } from "@nestjs/common";
import { WeatherModuleBase } from "./base/weather.module.base";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { WeatherResolver } from "./weather.resolver";

@Module({
  imports: [WeatherModuleBase],
  controllers: [WeatherController],
  providers: [WeatherService, WeatherResolver],
  exports: [WeatherService],
})
export class WeatherModule {}
