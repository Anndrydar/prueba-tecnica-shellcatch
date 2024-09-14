import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo de Correo Electrónico */}
      <TextInput
        label="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name="email-outline" />}
      />

      {/* Campo de Contraseña */}
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
        left={<TextInput.Icon name="lock-outline" />}
      />

      {/* Botón para Iniciar Sesión */}
      <Button
        mode="contained"
        onPress={() => console.log('Logging in')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Iniciar Sesión
      </Button>

      {/* Botón "Recuperar Contraseña" */}
      <TouchableOpacity style={styles.recoverButton} onPress={() => console.log('Recuperar contraseña')}>
        <Text style={styles.recoverText}>Recuperar Contraseña</Text>
      </TouchableOpacity>

      {/* Enlace "¿Olvidaste tu Contraseña?" */}
      <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')}>
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  recoverButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  recoverText: {
    color: '#6200EE',
    fontSize: 16,
  },
  forgotText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
