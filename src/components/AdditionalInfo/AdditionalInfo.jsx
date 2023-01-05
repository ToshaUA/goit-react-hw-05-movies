import {
  AdditionalInfoWrapper,
  AdditionalInfoList,
  AdditionalInfoTitle,
  AdditionalItem,
} from './AdditionalInfo.styled';

import PropTypes from 'prop-types';


export const AdditionalInfo = ({ backLinkHref }) => {
  return (
    <AdditionalInfoWrapper>
      <AdditionalInfoTitle>Additional infomation</AdditionalInfoTitle>
      <AdditionalInfoList>
        <li>
          <AdditionalItem to="cast" state={{ from: backLinkHref }}>
            Cast
          </AdditionalItem>
        </li>
        <li>
          <AdditionalItem to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </AdditionalItem>
        </li>
      </AdditionalInfoList>
    </AdditionalInfoWrapper>
  );
};

AdditionalInfo.propTypes = {
    backLinkHref: PropTypes.shape({
        state: PropTypes.shape({}),
    }),
}
