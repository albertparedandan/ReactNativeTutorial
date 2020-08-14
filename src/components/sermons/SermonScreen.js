import React from 'react';
import {View, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import trackPlayerServices from '../../services/trackPlayerServices';
import {TouchableOpacity} from 'react-native-gesture-handler';

// const track = { id: '1',
//   url: 'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part3-2020-07-26-SermonAudio.mp3',
//   title: 'Forward Series Part 3',
//   artist: 'Pastor Bo Zhu',
// };
// 
// const track1 = {
//   id: '2',
//   url: 'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part2-2020-07-19-SermonAudio.mp3',
//   title: 'Forward Series Part 2',
//   artist: 'Pastor Seth S Kim',
// };
// 
TrackPlayer.setupPlayer().then(() => {
  console.log('setup');
  TrackPlayer.registerPlaybackService(() => trackPlayerServices);
});

export default function SermonScreen({ route, navigation }) {
  const sermon = route.params;
  const { title, id, url } = sermon;
  TrackPlayer.add(sermon);
  return(
    <View>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => TrackPlayer.play()}>
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.pause()}>
        <Text>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.stop()}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
        <Text>Previous</Text>
      </TouchableOpacity>
    </View>
  );
}
