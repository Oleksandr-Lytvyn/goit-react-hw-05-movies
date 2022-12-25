import { getApiCast } from 'components/helpers/getApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const {
          data: { cast },
        } = await getApiCast(movieId);
        setIsLoading(false);
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {error && <div>{error}</div>}
      {isLoadind && <div>.......loading</div>}
      <div className="container">
        {/* <h2>Cast</h2> */}
        {cast.length > 0 ? (
          <ul className="cast-list">
            {cast.map(actor => {
              const imageUrl = actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : 'https://picsum.photos/200';
              return (
                <li key={actor.id} className="cast-card">
                  <img className="cast-img" src={imageUrl} alt="" />
                  <div className="cast-info">
                    <h2 className="actor-name">{actor.name}</h2>
                    <p>{actor.character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>no cast</div>
        )}
      </div>
    </>
  );
}

// {
//   reviews.length > 0 ? (
//     reviews.map(rev => {
//       return (
//         <li key={rev.id} className="reviews-item">
//           <p>author: {rev.author}</p>
//           <p>{rev.content}</p>
//         </li>
//       );
//     })
//   ) : (
//     <div>no reviews</div>
//   );
// }

//   `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
//
