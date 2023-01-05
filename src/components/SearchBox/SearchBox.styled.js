import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const Input = styled.input`
  color: #61677c;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  font-weight: bold;
  letter-spacing: -0.2px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  max-width: 500px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-bottom-left-radius: 320px;
  border-top-left-radius: 320px;
  padding: 12px;
  background-color: #ebecf0;
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  outline: 0;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  border-bottom-right-radius: 320px;
  border-top-right-radius: 320px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

export const IconSearchStyled = styled(BsSearch)`
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  button:hover & {
    fill: #babecc;
  }
`;
