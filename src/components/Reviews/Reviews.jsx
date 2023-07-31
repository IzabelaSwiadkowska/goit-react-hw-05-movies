import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api/FetchApi';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  if (reviews < 1) {
    return   <ReviewsContainer> Sorry, we don't have any reviews! </ReviewsContainer>
  }

  return (
  <ReviewsContainer>
      {reviews.map(review => (
        <div key={review.id}>
    
            <h3>Author: {review.author}</h3>
       
          <p>
            <b>Content:</b> {review.content}
          </p>
          <hr />
        </div>
      ))}
  </ReviewsContainer>
  );
};

export default Reviews;
