import {
  Alert,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../apis/Network';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const Home_Banner = () => {
  const [upcomingApiData, setupcomingApiData] = useState([]);
  useEffect(() => {
    const handleUpComingApi = async () => {
      const {data, status} = await getUpcomingMovies();
      if (status === 200) {
        setupcomingApiData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleUpComingApi();
  }, []);

  const renderMovieBanner = ({item, index}) => {
    return (
      <ImageBackground
        style={styles.movieBanner}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}>
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,7)']}
          style={styles.linearContainer}>
          <Text style={styles.titles}>My List</Text>

          <TouchableOpacity
            onPress={() => {
              console.log('Clicked Play Button');
            }}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={35} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2.2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>

          <Text style={styles.titles}>Info</Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={upcomingApiData}
        renderItem={renderMovieBanner}
      />
    </View>
  );
};

export default Home_Banner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: '100%',
  },
  movieBanner: {
    width: responsiveWidth(100),
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  linearContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: 'white',
    width: responsiveWidth(28),
    height: responsiveHeight(5.5),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
