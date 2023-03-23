import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { StyledWrapper } from './CartContentStyled';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, addToCart, totalPrice } =
    useContext(CartContext);

  const navigate = useNavigate();

  const goToSuccessPage = () => {
    navigate('/success');
    clearCart();
  };

  return (
    <StyledWrapper className='section wrapper page'>
      {cartItems.length === 0 ? (
        <h3 className='subtitle'>Your cart is empty</h3>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li className='container' key={item.id}>
              <div className='img-container'>
                <img src={item.imageUrl} alt={item.title} className='img' />
                <div>
                  <h4>{item.title}</h4>
                  <p> {item.description}</p>
                  <div className='btns-container'>
                    <div className='btns'>
                      <h5>Quantity:</h5>
                      <button
                        className='link-btn min-btn'
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className='link-btn'
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='info-container2'>
                <h5>
                  <div className='btns-container2'>
                    Total: {totalPrice}
                    <div className='btns'>
                      <button onClick={clearCart} className='link-btn min-btn'>
                        Clear Cart
                      </button>
                      <button onClick={goToSuccessPage} className='link-btn '>
                        Checkout
                      </button>
                    </div>
                  </div>
                </h5>
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledWrapper>
  );
}
