import styled from 'styled-components';

export const FilmCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const FilmInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 450px;
  padding: 10px;
`;

export const FilmTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const FilmPoster = styled.img`
  object-fit: cover;
  width: 320px;
  height: 480px;
  border-radius: 10px;
  border-top-right-radius: 50px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const FilmInfoTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const FilmInfoDesc = styled.span`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const FilmInfoOverview = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 400;
  text-align: justify;
`;
