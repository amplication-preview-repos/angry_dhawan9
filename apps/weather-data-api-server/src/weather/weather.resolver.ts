import * as graphql from "@nestjs/graphql";
import { WeatherResolverBase } from "./base/weather.resolver.base";
import { Weather } from "./base/Weather";
import { WeatherService } from "./weather.service";

@graphql.Resolver(() => Weather)
export class WeatherResolver extends WeatherResolverBase {
  constructor(protected readonly service: WeatherService) {
    super(service);
  }
}
