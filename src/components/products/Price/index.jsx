import { percentageDifference } from '../../../utils/formulas';
import { StyledWrapper } from './PriceStyled';

export default function Price({ price, discountedPrice }) {
  const discount = percentageDifference(price, discountedPrice);

  return (
    <StyledWrapper>
      <div>
        {discount !== 0 ? (
          <div className='discount'>{discount}% off</div>
        ) : null}
        <h5>{discountedPrice}</h5>
      </div>
    </StyledWrapper>
  );
}
