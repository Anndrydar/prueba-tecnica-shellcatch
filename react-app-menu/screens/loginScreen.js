import React, { useState } from 'react'; // Solo una vez la importación de React
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(); // Accediendo a las traducciones

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Iniciar Sesion')}</Text>

      <TextInput
        label={t("Correo electronico")}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name="email-outline" />}
      />

      <TextInput
        label={t("Contraseña")}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        mode="outlined"
        left={<TextInput.Icon name="lock-outline" />}
      />

      <Button
        mode="contained"
        onPress={() => console.log(t('Iniciar Sesion'))}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        {t('Iniciar Sesion')}
      </Button>

      <TouchableOpacity style={styles.recoverButton} onPress={() => console.log(t('Recuperar Contraseña'))}>
        <Text style={styles.recoverText}>{t('Recuperar Contraseña')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log(t('Olvidates tu contraseña'))}>
        <Text style={styles.forgotText}>{t('Olvidates tu contraseña')}?</Text>
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