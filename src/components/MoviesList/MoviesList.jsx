import { useLocation } from 'react-router-dom';
import { getDate, getPosterFilm, sliceVoteAverage } from '../../api/Api';
import {
  LinkStyled,
  FilmCard,
  FilmInfoWrapper,
  FilmTitle,
  FilmDescWrapper,
  FilmPoster,
  MovieList,
} from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies = [] }) => {
  const location = useLocation();

  if (!movies) {
    return;
  }

  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, vote_average, release_date }) => (
        <FilmCard key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <FilmPoster src={getPosterFilm(poster_path)} alt={title} />
            <FilmInfoWrapper>
              <FilmTitle>{title}</FilmTitle>
              <FilmDescWrapper>
                <p>
                  Vote: {sliceVoteAverage(vote_average)} |{' '}
                  {getDate(release_date)}
                </p>
              </FilmDescWrapper>
            </FilmInfoWrapper>
          </LinkStyled>
        </FilmCard>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
};
