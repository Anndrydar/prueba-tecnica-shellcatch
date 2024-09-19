import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/loginScreen';
import JokeScreen from './screens/jokesScreen';
import ChangeLanguageScreen from './screens/ajustes';
import './i18n'; // Importa i18next
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function App() {
  const { t } = useTranslation(); 
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === t('Iniciar Sesion')) {
                iconName = 'log-in-outline';
              } else if (route.name === t('Chistes')) {
                iconName = 'happy-outline';
              }
              else if (route.name === t('Ajustes')) {
                iconName = 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#f8f8f8' },
          })}
        >
          <Tab.Screen name={t('Iniciar Sesion')} component={LoginScreen} />
          <Tab.Screen name={t('Chistes')} component={JokeScreen} />
          <Tab.Screen name={t('Ajustes')} component={ChangeLanguageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}