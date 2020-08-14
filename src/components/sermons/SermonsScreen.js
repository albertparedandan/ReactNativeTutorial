import React from 'react';
import { View, Text } from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Forward - Part 4: In Faith',
    album: ['Forward'],
    time: '10:00 AM',
    artist: 'Pastor Seth S. Kim',
    url:
      'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part4-2020-08-02-Sermon-Audio.mp3',
    artwork:
      'https://hongkong.hmcc.net/wp-content/uploads/forward-final-ad-min.jpg',
  },
  {
    id: '2',
    title: 'Forward - Part 3: In Partnership',
    album: ['Forward'],
    time: '10:00 AM',
    artist: 'Pastor Bo Zhu',
    url:
      'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part3-2020-07-26-SermonAudio.mp3',
    artwork:
      'https://hongkong.hmcc.net/wp-content/uploads/forward-final-ad-min.jpg',
  },
  {
    id: '3',
    title: 'Forward - Part 2: In Investment',
    album: ['Forward'],
    time: '10:00 AM',
    artist: 'Pastor Seth S. Kim',
    url:
      'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part2-2020-07-19-SermonAudio.mp3',
    artwork:
      'https://hongkong.hmcc.net/wp-content/uploads/forward-final-ad-min.jpg',
  },
  {
    id: '4',
    title: 'Forward - Part 1: In Obedience',
    album: ['Forward'],
    time: '10:00 AM',
    artist: 'Pastor Seth S. Kim',
    url:
      'https://hongkong.hmcc.net/wp-content/uploads/sermons/Forward-Part1-2020-07-12-SermonAudio.mp3',
    artwork:
      'https://hongkong.hmcc.net/wp-content/uploads/forward-final-ad-min.jpg',
  },
  {
    id: '5',
    title: 'Steadfast - Part 7',
    album: ['Steadfast'],
    time: '10:00 AM',
    artist: 'Pastor Seth S. Kim',
    url:
      'https://hongkong.hmcc.net/wp-content/uploads/sermons/Steadfast-Part7-2020-07-05-SermonAudio.mp3',
    artwork:
      'https://hongkong.hmcc.net/wp-content/uploads/steadfast-ad.png',
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const SermonsScreen: () => React$Node = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Test', item)}>
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data = {DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
};

export default SermonsScreen;
