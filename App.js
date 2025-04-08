import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Usuário cadastrado!");
    } catch (err) {
      Alert.alert("Erro", err.message);
    }
  };

  const logar = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Login realizado!");
    } catch (err) {
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Cadastrar" onPress={cadastrar} />
      <Button title="Login" onPress={logar} />
    </View>
  );
}
