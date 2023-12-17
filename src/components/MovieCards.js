import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const MovieCards = ({title, data}) => {
  const navigation =useNavigation()

  const handleOnClick=(movieData)=>{
 navigation.navigate('VideoPlayer',{movieData})
  }


  const renderMovieCards = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>handleOnClick(item)} >
        <Image
          resizeMode="center"
          style={styles.movieImg}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 17,
          fontWeight: 'bold',
          letterSpacing: 1,
          marginLeft: 10,
        }}>
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderMovieCards}
        ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    gap: 15,
    marginTop: 10,
  },
  movieImg: {
    width: responsiveWidth(50),
    height: '100%',
    borderRadius: 10,
  },
});
