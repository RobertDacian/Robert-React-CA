import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Price from '../Price/index';
import { BASE_URL } from '../../../constants/api';
import { CartContext } from '../../../context/CartContext';
import { StyledWrapper } from './ProductDetailStyled';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const { id, title, discountedPrice, imageUrl, description } = product;

    const item = {
      id,
      title,
      imageUrl,
      discountedPrice,
      description,
    };
    addToCart(item);
  };

  if (isLoading) {
    return (
      <div className='page-height-100'>
        <div>
          <h3 className='text-center'>Loading...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {
    imageUrl,
    title,
    price,
    discountedPrice,
    description,
    rating,
    reviews,
  } = product;

  return (
    <StyledWrapper className=' wrapper'>
      <div className='title'>
        <h1>Product Detail</h1>
        <div className='underline'></div>
      </div>
      <div className='section container '>
        <div className='info-container'>
          <img className='product-image' src={imageUrl} alt={title} />
          <div>
            <Price price={price} discountedPrice={discountedPrice} />
          </div>
        </div>
        <div className='product-desc'>
          <h3>{title}</h3>
          <span className='flex'>
            <p>
              <b>Product Ratings:</b>
            </p>
            <p>{rating}</p>
          </span>
          <span className='flex-dir-col'>
            <p className='review'>
              <b>Description:</b>
            </p>
            <p>{description}</p>
          </span>

          <div className='price-info' price-info>
            <span className='flex'>
              <p>
                <b>Price:</b>
              </p>
              <p>{discountedPrice}</p>
            </span>
          </div>

          <button className='btn' onClick={handleAddToCart}>
            Add to Cart
          </button>
          <hr />
          <div>
            {reviews.map((review) => {
              const { id, username, rating, description } = review;
              return (
                <div className='user-review' key={id}>
                  <span className='flex'>
                    <p>
                      <b>Reviewed by:</b>
                    </p>
                    <p>{username}</p>
                  </span>
                  <span className='flex'>
                    <p>
                      <b>Rated the product:</b>
                    </p>
                    <p>{rating}</p>
                  </span>
                  <span className='flex-col'>
                    <p className='review'>
                      <b>Review:</b>
                    </p>
                    <p>{description}</p>
                  </span>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default ProductDetail;
