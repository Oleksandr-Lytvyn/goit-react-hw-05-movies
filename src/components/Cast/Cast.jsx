import { getApiCast } from 'components/helpers/getApi';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
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
        <ul className="cast-list">
          {cast.map(actor => {
            return (
              <li key={actor.id} className="cast-card">
                <img
                  className="cast-img"
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt=""
                />
                <div className="cast-info">
                  <h2 className="actor-name">{actor.name}</h2>
                  <p>{actor.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
