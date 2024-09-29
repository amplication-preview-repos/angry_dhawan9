import { SortOrder } from "../../util/SortOrder";

export type WeatherOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
