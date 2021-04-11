import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: {
            backgroundColor: "#131313",
            borderBottomWidth: 1,
            borderBottomColor: "#00b94a",
          },
          headerTintColor: "#FFF",
          headerBackTitleVisible: false,
          headerBackTitle: "Voltar",
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
