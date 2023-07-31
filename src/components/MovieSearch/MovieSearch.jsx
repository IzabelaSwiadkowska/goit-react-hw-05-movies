import { useEffect, useState } from 'react';
import { fetchSearchApi } from 'api/FetchApi';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button, MovieUl, MovieLink, Img, MovieTitle, HomeContainer, MovieItem} from './MovieSearch.styled';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const inputParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!inputParam) {
      return;
    }
    async function fetch() {
      try {
        const { results } = await fetchSearchApi(inputParam);
        if (results.length < 1) {
          alert("We can't find it, try again");
        }
        setMovies(results);
      } catch (error) {
        alert('Something wrong, try again please');
      }
    }
    fetch();
  }, [inputParam]);

  const onSubmit = e => {
    if (!input) {
      alert('Please fill in the gap');
    }
    e.preventDefault();
    setSearchParams(input !== '' ? { query: input } : {});
    setInput('');
  };

  const onChangeInput = value => {
    setInput(value);
  };

  if (!movies) {
    return null;
  }

  return (
   <HomeContainer >
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={input}
          name="input"
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <Button type="submit">Search</Button>
    </Form>
    
      {movies && (
        <MovieUl>
          {movies.map(movie => {
            
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath = 'srccomponentsimages\no-poster.jpg';
            }
            return (
              <MovieItem key={movie.id}>
              <MovieLink key={movie.id} to={`${movie.id}`}>
                <Img src={posterPath} width="400" alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                </MovieLink>
                </MovieItem>
            );
          })}
        </MovieUl>
      )}
      </HomeContainer>
      
  );
};
export default MovieSearch;
