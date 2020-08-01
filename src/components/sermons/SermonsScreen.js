import React from 'react';
import { View, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SermonsScreen: () => React$Node = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Forward Series Part 3</Text>
      <Text>Pastor Bo Zhu</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Forward Series Part 3')}>
        <Text>TEST</Text>
      </TouchableOpacity>
    </View>
  )
};

export default SermonsScreen;
