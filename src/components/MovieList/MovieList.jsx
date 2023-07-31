import { useEffect, useState } from 'react';
import { FetchTradingApi } from 'api/FetchApi';

import {
  HomeContainer,
  HomeTitle,
  MovieUl,
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
} from './MovieList.styled';
 

const MovieList = () => {
  const [tradedMovies, setTradedMovies] = useState([]);

  useEffect(() => {
    const movieFetching = async () => {
      try {
        const { results } = await FetchTradingApi();
        if (results < 1) {
          alert("We can't find anything, please try again");
        }
        setTradedMovies(results);
      } catch {
        alert('Something go wrong, please try again');
      }
    };

    movieFetching();
  }, []);

  return (
    <HomeContainer>
       <HomeTitle>Trending Today</HomeTitle>
      {tradedMovies && (
        <MovieUl >
          {tradedMovies.map(({ id, title, poster_path }) => (
              
            <MovieItem key={id} >
              <MovieLink key={id} to={`/movies/${id}`}>
                <Img
                   
                  src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                  alt={title}
                />
                <MovieTitle>
                  <h3>  {title}</h3>
                </MovieTitle>
              </MovieLink>
            </MovieItem>
          ))}
      
     
        </MovieUl>
      )}
  </HomeContainer>
  )
};

export default MovieList;
