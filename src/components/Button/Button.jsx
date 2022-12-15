import { FiCornerRightDown } from 'react-icons/fi';
import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      Load more
      <FiCornerRightDown size="25" />
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
