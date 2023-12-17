import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const VideoPlayer = ({route}) => {
  const {
    title,
    release_date,
    poster_path,
    overview,
    backdrop_path,
    vote_count,
  } = route.params.movieData;

  const [isVideoVisible, setisVideoVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#080508'} />
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible ? (
          <Video
            setControls
            controls
            repeat={false}
            resizeMode="cover"
            style={styles.firstContainer}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            onFullscreenPlayerWillPresent={() => {
              Orientation.lockToLandscape();
            }}
            onFullscreenPlayerWillDismiss={() => {
              Orientation.lockToPortrait();
            }}
          />
        ) : (
          <Image
            style={styles.firstContainer}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
            }}
          />
        )}

        {/* Second Container */}
        <View style={styles.secondContainer}>
          {/* First Box */}
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Fontisto name="netflix" size={22} color="red" />
            <Text style={{fontSize: 15, color: 'white', letterSpacing: 5}}>
              SERIES
            </Text>
          </View>

          {/* First Box */}

          {/* Second Box */}
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            {title}
          </Text>
          {/* Second Box */}

          {/* Third Box */}

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 16, color: 'white'}}>
              {release_date.split('-')[0]}
            </Text>
            <View
              style={{width: 2.5, height: 20, backgroundColor: 'white'}}></View>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <MaterialIcons name="favorite" size={20} color="red" />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 15,
                }}>
                {vote_count}%
              </Text>

              <MaterialIcons name="hd" size={25} color="white" />
            </View>
          </View>
          {/* Third Box */}
        </View>

        <View style={{padding: 10, gap: 10, marginTop: 5}}>
          <TouchableOpacity
            onPress={() => {
              setisVideoVisible(true);
            }}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={22} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Clicked Play Button');
            }}
            activeOpacity={0.8}
            style={[styles.playButton, {backgroundColor: '#2B292B'}]}>
            <Octicons
              style={{marginRight: 5}}
              name="download"
              size={22}
              color="white"
            />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'white',
                  fontWeight: '700',
                },
              ]}>
              Download
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginVertical: 10,
              lineHeight: 25,
              textAlign: 'justify',
            }}>
            {overview}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#080508',
    marginTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    flex: 1,
  },
  firstContainer: {
    height: responsiveHeight(35),
  },
  secondContainer: {
    padding: 10,
    gap: 10,
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: 'white',
    height: responsiveHeight(5.3),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
