import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  border-bottom-right-radius: 5000px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  box-shadow: 5px 5px 7px #606060, -5px -5px 7px #ffffff;
`;

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchFormButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  border: none;
  background-color: rgb(200, 200, 200);
  border-top-right-radius: 5000px;
  border-bottom-right-radius: 5000px;
  background: transparent;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  outline: none;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const FormInputStyled = styled(Field)`
  width: 200px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 8px 10px;
  font: inherit;
  background: transparent;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-top-left-radius: 5000px;
  border-bottom-left-radius: 5000px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  -webkit-box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &[type='text']:focus {
    background: rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;
