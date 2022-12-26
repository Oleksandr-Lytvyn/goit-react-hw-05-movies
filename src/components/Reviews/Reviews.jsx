import { useState } from 'react';
import { getApiReviews } from 'components/helpers/getApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const {
          data: { results },
        } = await getApiReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <section>
      <h2>reviews</h2>
      {isLoading && <div>.......loading</div>}
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(rev => {
            return (
              <ReviewsItem key={rev.id}>
                <p>author: {rev.author}</p>
                <p>{rev.content}</p>
              </ReviewsItem>
            );
          })
        ) : (
          <div>no reviews</div>
        )}
      </ReviewsList>
    </section>
  );
}
