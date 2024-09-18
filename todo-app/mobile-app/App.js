import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FormularioTarea from './screens/tareaApp';
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

            if (route.name === t('Tarea')) {
              iconName = 'clipboard-outline'; // Cambia el ícono según tus preferencias
            } else if (route.name === t('Ajustes')){
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f8f8f8' },
        })}
      >
        <Tab.Screen name={t('Tarea')} component={FormularioTarea} />
        <Tab.Screen name={t('Ajustes')} component={ChangeLanguageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
