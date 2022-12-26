import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getApiDetails } from 'components/helpers/getApi';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  DetailsCard,
  DetailsImg,
  DetailsImgBox,
  DetailsLinkBack,
  DetailsNavLink,
  DetailsWrapper,
  DetalisInfo,
  DetalisNavigation,
} from './MovieDetails.styled';

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
        const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'https://upload.wikimedia.org/wikipedia/ru/a/ac/No_image_available.svg';
        setMovieImg(imageUrl);
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
          <DetailsCard>
            <DetailsLinkBack to={back}>Go back</DetailsLinkBack>
            {isLoading && <div>.......loading</div>}
            <DetailsWrapper>
              <DetailsImgBox>
                <DetailsImg src={movieImg} alt="" />
              </DetailsImgBox>
              <DetalisInfo>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </DetalisInfo>
            </DetailsWrapper>
            <DetalisNavigation>
              <DetailsNavLink to="cast">Cast</DetailsNavLink>
              <DetailsNavLink to="reviews">Reviews</DetailsNavLink>
            </DetalisNavigation>
            <Outlet />
          </DetailsCard>
        </div>
      </main>
    </>
  );
}
