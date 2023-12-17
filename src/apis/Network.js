import axios from 'axios';

const Config = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTliNzI4YzY4MDRjM2EwNDg0OTY2ZTEwN2JkMDA4NSIsInN1YiI6IjY1M2M5OTRiMTA5Y2QwMDBhZDYyMGZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScsgchwmoKvvZ99yp4i8Wv7uxy1XIpdAN1Trcqqh1s4',
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/upcoming`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/now_playing`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/popular`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/top_rated`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    const data = response.data;
    const status = response.status;
    return {success: true, data: data, status: status};
  } catch (error) {
    console.log(error);
    return {success: false, data: error};
  }
};
