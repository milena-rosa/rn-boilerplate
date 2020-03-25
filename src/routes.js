import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: 'Title',
          headerTintColor: 'white',
          headerLeft: null,
          headerRight: null,
          headerStyle: {
            backgroundColor: '#211451',
          },
          cardStyle: {
            backgroundColor: '#211451',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
