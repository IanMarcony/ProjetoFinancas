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
} from "../Signin/styles";
import { AuthContext } from "../../contexts/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Container behavior={Platform.OS == "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

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

        <SubmitButton
          onPress={() => alert("Usuario Criado!!! \n Nome: " + user.nome)}
        >
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
