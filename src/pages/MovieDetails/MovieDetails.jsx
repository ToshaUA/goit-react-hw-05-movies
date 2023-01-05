import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Loader } from 'components/Loader/Loader';
import { FilmCardDetail } from 'components/FilmCardDetail/FilmCardDetail';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { getFilmById } from 'api/Api';
import { Outlet } from 'react-router-dom';
import { LinkStyled, Section } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovieInfo = async () => {
      try {
        const movieInfo = await getFilmById(movieId);
        setMovie(movieInfo);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in MovieDetails', error);
      }
    };
    getMovieInfo();
  }, [movieId]);

  if (movie.lenght === 0) {
    return;
  }

  return (
    <main>
      {!isLoading && (
        <Section>
          <LinkStyled to={backLinkHref}>
            <MdArrowBackIosNew size={24} />
            Go back
          </LinkStyled>
          <FilmCardDetail movie={movie} />
          <AdditionalInfo backLinkHref={backLinkHref} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
      )}
      {isLoading && <Loader />}
    </main>
  );
};

export default MovieDetails;
