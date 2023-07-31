import axios from 'axios';

const API_KEY = '38567b7c3359452d13704f8cb740efcb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const FetchTradingApi = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
    );

    return data;
  } catch (error) {
    console.log(error.toString());
  }
};

export const fetchMovieDetails = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.log(error.toString());
  }
};

export const fetchSearchApi = async query => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );

    return data;
  } catch (error) {
    console.log(error.toString());
  }
};
export const fetchMovieCredits = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.log(error.toString());
  }
};
export const fetchMovieReviews = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data;
  } catch (error) {
    console.log(error.toString());
  }
};
