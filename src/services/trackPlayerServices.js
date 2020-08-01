import TrackPlayer from 'react-native-track-player';
// service.js
export default async function trackPlayerServices() {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
};
