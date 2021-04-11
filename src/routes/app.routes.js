import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}
