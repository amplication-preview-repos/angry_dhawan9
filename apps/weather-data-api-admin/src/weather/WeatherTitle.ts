import { Weather as TWeather } from "../api/weather/Weather";

export const WEATHER_TITLE_FIELD = "id";

export const WeatherTitle = (record: TWeather): string => {
  return record.id?.toString() || String(record.id);
};
