import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/loginScreen';
import JokeScreen from './screens/jokesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Login') {
                iconName = 'log-in-outline';
              } else if (route.name === 'Jokes') {
                iconName = 'happy-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#f8f8f8' },
          })}
        >
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Jokes" component={JokeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}