import { useState } from 'react';
import { getApiReviews } from 'components/helpers/getApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
        // console.log(results);
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
      <ul className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map(rev => {
            return (
              <li key={rev.id} className="reviews-item">
                <p>author: {rev.author}</p>
                <p>{rev.content}</p>
              </li>
            );
          })
        ) : (
          <div>no reviews</div>
        )}
      </ul>
    </section>
  );
}
