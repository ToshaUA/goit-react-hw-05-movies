import { getPosterFilm, getGenres, getDate, getPecentageValue } from 'api/Api';

import {
  FilmCard,
  FilmInfoWrapper,
  FilmPoster,
  FilmTitle,
  FilmInfoTitle,
  FilmInfoDesc,
  FilmInfoOverview,
} from './FilmCardDetail.styled';

import PropTypes from 'prop-types';

export const FilmCardDetail = ({ movie }) => {
  const { title, poster_path, release_date, overview, genres, vote_average } =
    movie;
  return (
    <FilmCard>
      <FilmPoster src={getPosterFilm(poster_path)} alt={title} />
      <FilmInfoWrapper>
        <FilmTitle>
          {title} ({getDate(release_date)})
        </FilmTitle>
        <FilmInfoTitle>
          User Score:{' '}
          <FilmInfoDesc>
            {vote_average && getPecentageValue(vote_average)}
          </FilmInfoDesc>
        </FilmInfoTitle>
        <FilmInfoTitle>Overview: </FilmInfoTitle>
        <FilmInfoOverview>{overview}</FilmInfoOverview>
        <FilmInfoTitle>
          Genres: <FilmInfoDesc>{getGenres(genres)}</FilmInfoDesc>
        </FilmInfoTitle>
      </FilmInfoWrapper>
    </FilmCard>
  );
};

FilmCardDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    vote_average: PropTypes.number,
  }),
};
