import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionalInfoWrapper = styled.div`
  margin: 20px auto;
  margin-top: 0;
  text-align: center;
`;

export const AdditionalInfoTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  margin-bottom: 10px;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AdditionalItem = styled(NavLink)`
  padding: 8px 25px;
  border-radius: 320px;
  text-decoration: none;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: 500;
  display: block;
  min-width: 150px;
  background-color: #ebecf0;
  transition: all 0.2s ease-in-out;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &.active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
