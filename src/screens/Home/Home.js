import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Home_Banner from '../../components/Home_Banner';
import MovieCards from '../../components/MovieCards';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from '../../apis/Network';

const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState([]);
  const [popularMoviesData, setpopularMoviesData] = useState([]);
  const [top_ratedData, settop_ratedData] = useState([]);
  useEffect(() => {
    const handleApi = async () => {
      const {data, status} = await getNowPlayingMovies();
      if (status === 200) {
        setnowPlayingData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const {data, status} = await getPopularMovies();
      if (status === 200) {
        setpopularMoviesData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleApi();
  }, []);
  useEffect(() => {
    const handleApi = async () => {
      const {data, status} = await getTopRatedMovies();
      if (status === 200) {
        settop_ratedData(data.results);
      } else {
        Alert.alert(`Request failed with ${data}`);
      }
    };
    handleApi();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <ScrollView style={styles.scrollView}>
        <Home_Banner />
        <View style={styles.subContainer}>
          <MovieCards title="Now Playing" data={nowPlayingData} />
          <MovieCards title="Popular Movies" data={popularMoviesData} />
          <MovieCards title="Top Rated Movies" data={top_ratedData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 20,
  },
});
