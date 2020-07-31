import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SermonsScreen from '../components/sermons/SermonsScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Sermons" component={SermonsScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
