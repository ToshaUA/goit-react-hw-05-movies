import { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { HomeTitle } from './Home.styled';

const API_KEY = '579a7483bae7d6a5a25eb4c1ddded2cf';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const getTrendMovies = async () => {
      try {
        const response = await axios.get(
          `/trending/movie/day?api_key=${API_KEY}`
        );
        const moviesTrend = response.data.results;
        setMovies(moviesTrend);
        setisLoading(false);
        return moviesTrend;
      } catch (error) {
        setisLoading(false);
        console.log('Something went wrong in Home', error);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <main>
      <section>
        {!isLoading && movies.length > 0 && (
          <>
            <HomeTitle>Trending a day</HomeTitle>
            {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
          </>
        )}
      </section>
      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
