import React, { useState, useContext } from "react";
import { View, Text, Platform } from "react-native";
import {
  Background,
  Container,
  AreaInput,
  Input,
  Logo,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleLogin() {
    console.log(user.nome, user.uid);
  }

  return (
    <Background>
      <Container behavior={Platform.OS == "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("Signup")}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
