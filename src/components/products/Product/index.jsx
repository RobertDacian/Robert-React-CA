import { Link } from 'react-router-dom';
import Price from '../Price';
import { StyledWrapper } from './ProductStyled';
import { FaSearch } from 'react-icons/fa';

export default function Product({
  id,
  title,
  imageUrl,
  price,
  discountedPrice,
  description,
}) {
  return (
    <StyledWrapper>
      <div className='product-container'>
        <img src={imageUrl} alt={title} />
        <div>
          <Price price={price} discountedPrice={discountedPrice} />
        </div>

        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h4>{title}</h4>
        <h5>{discountedPrice}</h5>
        <p>{description}</p>
      </footer>
    </StyledWrapper>
  );
}
