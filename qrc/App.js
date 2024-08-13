import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Scanner from './screens/Scanner';
import Home from './screens/Home';
// import LoadingScreen from './screens/LoadingScreen'; // Import the new LoadingScreen component

const Stack = createStackNavigator();

function App() {
  return (
    
      <Stack.Navigator
      screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
      >
        {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
  );
}

export default ()=> {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
