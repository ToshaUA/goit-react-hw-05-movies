import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'api/Api';
import { Loader } from 'components/Loader/Loader';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsContent,
  NoReview,
} from './Reviews.styled';
import { Container } from 'style/Global.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const reviews = await getFilmReviews(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in Reviews', error);
      }
    };
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <Container>
      {!isLoading && reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>Author: {author}</ReviewsAuthor>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading && (
        <NoReview>
          Unfortunately there is no review for this movie! 😓{' '}
        </NoReview>
      )}
    </Container>
  );
};

export default Reviews;
