import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getApiQuery } from 'components/helpers/getApi';
import { MovieItem } from 'components/MovieItem/MovieItem';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    function fetchBackQuery() {
      const q = searchParams.get('q') ?? '';
      setQuery(q);
    }
    fetchBackQuery();
  });

  useEffect(() => {
    async function fetchQuery() {
      if (query === '') {
        return;
      }
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await getApiQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuery();
  }, [query]);

  function onSubmit(event) {
    event.preventDefault();
    if (event.target.search.value === '') {
      return alert('no query');
    }
    setQuery(event.target.search.value);
  }
  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="search"
            // value={query}
            onChange={e => {
              setSearchParams({ q: e.target.value });
            }}
          />
          <button type="submit">search</button>
        </form>
        {isLoading && <div>.......loading</div>}
        <ul>
          {movies.map(movie => {
            return <MovieItem key={movie.id} item={movie} />;
          })}
        </ul>
      </div>
    </>
  );
}
