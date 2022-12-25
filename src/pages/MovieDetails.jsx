import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getApiDetails } from 'components/helpers/getApi';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieImg, setMovieImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [back, setBack] = useState();
  const location = useLocation();

  if (location.state && location.state.from !== back) {
    setBack(location.state.from);
  }

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getApiDetails(movieId);
        setMovie(data);
        setMovieImg(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movie.poster_path, movieId]);

  return (
    <>
      <main>
        <div className="container">
          <div className="details-card">
            <Link className="back" to={back}>
              Go back
            </Link>
            {isLoading && <div>.......loading</div>}
            <div className="details-wrap">
              <div className="details-img-box">
                <img
                  className="details-img"
                  style={{ width: '150px' }}
                  src={movieImg}
                  alt=""
                />
              </div>
              <div className="details-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="details-nav">
              <Link className="details-nav-link" to="cast">
                Cast
              </Link>
              <Link className="details-nav-link" to="reviews">
                Reviews
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
