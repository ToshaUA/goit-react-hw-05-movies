import styled from 'styled-components';

export const ImageGalleryItemStyled = styled.li`
  border: none;
`;

export const Image = styled.img`
  width: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-top-left-radius: 40px;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
