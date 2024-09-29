import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WeatherList } from "./weather/WeatherList";
import { WeatherCreate } from "./weather/WeatherCreate";
import { WeatherEdit } from "./weather/WeatherEdit";
import { WeatherShow } from "./weather/WeatherShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { ForecastList } from "./forecast/ForecastList";
import { ForecastCreate } from "./forecast/ForecastCreate";
import { ForecastEdit } from "./forecast/ForecastEdit";
import { ForecastShow } from "./forecast/ForecastShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"WeatherDataAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Weather"
          list={WeatherList}
          edit={WeatherEdit}
          create={WeatherCreate}
          show={WeatherShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Forecast"
          list={ForecastList}
          edit={ForecastEdit}
          create={ForecastCreate}
          show={ForecastShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
