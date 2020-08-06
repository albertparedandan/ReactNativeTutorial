import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SermonsScreen from '../components/sermons/SermonsScreen';
import SermonScreen from '../components/sermons/SermonScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Sermons" component={SermonsScreen} />
      <MainStack.Screen name="Test" component={SermonScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
