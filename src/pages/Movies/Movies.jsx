import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { getFilmByKeyword } from 'api/Api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const searchMovie = query !== '' ? { query } : {};
    setSearchParams(searchMovie);
  };

  useEffect(() => {
    if (!movie) {
      return;
    }
    setisLoading(true);
    const getMovie = async () => {
      try {
        const findedMovie = await getFilmByKeyword(movie);
        setMovies(findedMovie);
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        console.log('Error in Movies', error);
      }
    };
    getMovie();
  }, [movie]);

  return (
    <main>
      <section>
        <SearchBox onUpdateQuery={updateQueryString} value={movie} />
        {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
        {isLoading && <Loader />}
        {!isLoading && movie && movies.length === 0 && (
          <div>Sorry, we couldn't find anything :(</div>
        )}
      </section>
    </main>
  );
};

export default Movies;
