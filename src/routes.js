import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import TemperatureHistory from "./views/TemperatureHistory";
import ComponentsOverview from "./views/ComponentsOverview";
import UserProfileLite from "./views/UserProfileLite";
import TakeNewTemperature from "./views/TakeNewTemperature";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/temperature-history",
    layout: DefaultLayout,
    component: TemperatureHistory
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/take-new-temperature",
    layout: DefaultLayout,
    component: TakeNewTemperature
  }
];
