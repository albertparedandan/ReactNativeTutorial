/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer from 'react-native-track-player';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const track = {
  id: '1',
  url: 'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part3-2020-07-26-SermonAudio.mp3',
  title: 'Forward Series Part 3',
  artist: 'Pastor Bo Zhu',
};

const App: () => React$Node = () => {
  React.useEffect(() => {
    async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('aslfdkjasdlkfjladksfjdaklj');
      });

      TrackPlayer.registerPlaybackService(() => trackPlayerServices);

      await TrackPlayer.add([track]);
    }
  }, []);

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
