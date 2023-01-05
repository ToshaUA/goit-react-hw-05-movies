import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 0 0 60px 0;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-bottom: 20px;
  max-width: 110px;
  font-weight: bold;
  border-radius: 320px;
  text-decoration: none;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  background-color: #ebecf0;
  transition: all 0.2s ease-in-out;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;
