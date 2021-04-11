import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StatusBar } from "react-native";
import firebase from "./src/services/firebaseconnection";
import Routes from "./src/routes";

import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#131313" barStyle="light-content" />
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}
