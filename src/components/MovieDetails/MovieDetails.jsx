import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api/FetchApi';
import {
  BtnLink,
  MovieContainer,
  Img,
  MovieInfo,
  MovieTitle,
  AddInfo,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await fetchMovieDetails(movieId);
      setMovieDetails(result);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <BtnLink to="/"> Go Back</BtnLink>
          <MovieContainer>
            <Img
              src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <MovieInfo>
              <MovieTitle>
                {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
              </MovieTitle>
              <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>

              <p>{movieDetails.genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>
          <AddInfo> Additional information</AddInfo>
          <InfoList>
            <li>
              <InfoLink to={'cast'}>Cast</InfoLink>
            </li>
            <li>
              <InfoLink to={'reviews'}>Reviews</InfoLink>
            </li>
          </InfoList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
