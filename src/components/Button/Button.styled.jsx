import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  padding: 8px 20px;
  background: transparent;
  border: none;
  border-radius: 5px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
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
`;
