import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const ReviewsItem = styled.li`
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const ReviewsAuthor = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const ReviewsContent = styled.p`
  text-align: justify;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;

export const NoReview = styled.div`
  font-weight: 700;
  color: red;
  text-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
`;
