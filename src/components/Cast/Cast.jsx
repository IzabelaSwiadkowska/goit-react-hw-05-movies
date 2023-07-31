import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'api/FetchApi';
import {
  CastContainer,
  CastList,
  CastItem,
  Span,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    const fetchCast = async () => {
      const result = await fetchMovieCredits(movieId);
      setActors(result);
    };
    fetchCast();
  }, [movieId]);

  if (!actors) {
    return null;
  }

  let posterPath;
  const { cast } = actors;

  return (
   <CastContainer> 
    <CastList>
      {cast.map(actor => {
        if (actor.profile_path) {
          posterPath = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
        } else {
          posterPath = `https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`;
        }
        return (
          <CastItem key={actor.id}>
            <Img src={posterPath} width="200" height="300" alt={actor.name} />
                <CastDescr>
            <CastName>{actor.name}</CastName>
              <CastChar><Span>Character:</Span> {actor.character}</CastChar>
              </CastDescr>
          </CastItem>
        );
      })}
      </CastList>
      </CastContainer>
  );
};
export default Cast;
