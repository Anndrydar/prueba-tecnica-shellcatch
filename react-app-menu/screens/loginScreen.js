import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>

      <TextInput
        label ={"Correo electronico"}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name="email-outline" />}
      />

      <TextInput
        label={"Contraseña"}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
        left={<TextInput.Icon name="lock-outline" />}
      />

      <Button
        mode="contained"
        onPress={() => console.log('Logging in')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Correo electronico
      </Button>

      <TouchableOpacity style={styles.recoverButton} onPress={() => console.log('Recuperar contraseña')}>
        <Text style={styles.recoverText}>Recuperar contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')}>
        <Text style={styles.forgotText}>Olvidastes tu contraseña ?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recoverButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  recoverText: {
    color: '#6200ee',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 10,
    fontSize: 14,
  },
});