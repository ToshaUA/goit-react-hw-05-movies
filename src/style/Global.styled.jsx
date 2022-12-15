import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
  line-height: 1.5;
  color: rgb(0, 0, 0);
  margin: 0;
  background-image: linear-gradient(
    1000deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display: block;
}`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
