import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './CartIconStyled';
import { CartContext } from '../../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartButton() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <StyledWrapper>
      <div>
        <Link to='/cart'>
          <span className='cart-container'>
            <FaShoppingCart />
            <span className='cart-value'>{totalItems}</span>
          </span>
        </Link>
      </div>
    </StyledWrapper>
  );
}
