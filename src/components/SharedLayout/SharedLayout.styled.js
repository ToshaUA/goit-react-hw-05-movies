import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;
  margin-bottom: 16px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const LogoIcon = styled(GoDeviceCameraVideo)`
  fill: black;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
`;

export const Link = styled(NavLink)`
  padding: 8px 25px;
  border-radius: 320px;
  text-decoration: none;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: 500;
  display: block;
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
