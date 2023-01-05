import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
`;

export const LinkStyled = styled(Link)`
  display: block;
  color: #000;
  transform: scale(1);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  border-top-right-radius: 50px;
  :hover,
  :focus {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
  }
`;

export const FilmCard = styled.div`
  width: 320px;
  cursor: pointer;
`;

export const FilmInfoWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  padding: 10px;
`;

export const FilmTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 3px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const FilmDescWrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const FilmPoster = styled.img`
  object-fit: cover;
  width: 320px;
  height: 480px;
  border-top-right-radius: 50px;
  border-top-left-radius: 10px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;
