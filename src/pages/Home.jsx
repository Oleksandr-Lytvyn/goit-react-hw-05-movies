import { getApiHome } from 'components/helpers/getApi';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPopular() {
      setIsLoading(true);
      try {
        const data = await getApiHome();
        setMovies(data.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPopular();
    // getApiHome().then(resp => setMovies(resp.data.results));
  }, []);
  return (
    <>
      <h1>Popular</h1>
      {isLoading && <div>.......loading</div>}
      <ul>
        {movies.map(movie => {
          return <MovieItem key={movie.id} item={movie} />;
        })}
      </ul>
    </>
  );
}
