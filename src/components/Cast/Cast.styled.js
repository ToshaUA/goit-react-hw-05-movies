import styled from 'styled-components';

export const CastGallery = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  max-width: 240px;
`;

export const CastImg = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
  object-position: top;
  width: 240px;
  height: 320px;
`;

export const CastName = styled.p`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const Role = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  padding: 10px;
`;
