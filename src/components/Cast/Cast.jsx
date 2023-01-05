import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPosterFilm, getFilmCast } from 'api/Api';
import { CastGallery, CastItem, CastImg, CastName, Role } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        const cast = await getFilmCast(movieId);
        setCast(cast);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in Cast', error);
      }
    };
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {!isLoading && cast.length > 0 && (
        <CastGallery>
          {cast.map(({ cast_id, name, character, profile_path }) => (
            <CastItem key={cast_id}>
              <CastImg src={getPosterFilm(profile_path)} alt={name} />
              <CastName>{name}</CastName>
              <Role>Character: {character}</Role>
            </CastItem>
          ))}
        </CastGallery>
      )}
      {isLoading && <Loader />}
      {cast.length === 0 && !isLoading && (
        <div>We didn't find any actors :( </div>
      )}
    </>
  );
};

export default Cast;
