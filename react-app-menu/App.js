// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
}

function JokesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jokes</Text>
    </View>
  );
}

function WifiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WiFi</Text>
    </View>
  );
}

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
            } else if (route.name === 'WiFi') {
              iconName = 'wifi-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f8f8f8' },
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Jokes" component={JokesScreen} />
        <Tab.Screen name="WiFi" component={WifiScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#6200EE',
  },
});
