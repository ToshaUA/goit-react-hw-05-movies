import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  FormStyled,
  SearchFormButtonStyled,
  FormInputStyled,
} from './Searchbar.styled';

const initialValues = { queryValue: '' };

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormStyled>
          <FormInputStyled
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="What are we looking for?"
            name="queryValue"
          />
          <SearchFormButtonStyled type="submit">
            <BsSearch size="24" />
          </SearchFormButtonStyled>
        </FormStyled>
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
