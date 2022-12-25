import { Link, useLocation } from 'react-router-dom';

export function MovieItem({ item }) {
  const location = useLocation();
  // console.log(location);
  return (
    <li>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        {item.title}
      </Link>
    </li>
  );
}
