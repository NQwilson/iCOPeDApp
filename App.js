/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EnterScreen from './screens/EnterScreen';
import LoginScreen from './screens/LoginScreen';
import WeatherScreen from './screens/WeatherScreen';
import MainTabScreen from './screens/MainTabScreen';
import WeatherScreen2 from './screens/WeatherScreen2';
import PollutionScreen from './screens/PollutionScreen';
import DietScreen from './screens/DietScreen';


const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="EnterScreen" component={EnterScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Weather" component={WeatherScreen} />
          <AppStack.Screen name="MainTabScreen" component={MainTabScreen} />
          <AppStack.Screen name="WeatherScreen2" component = {WeatherScreen2} />
          <AppStack.Screen name="PollutionScreen" component = {PollutionScreen} />
          <AppStack.Screen name="DietScreen" component = {DietScreen} />
        </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default App;