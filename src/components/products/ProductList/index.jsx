import React, { useState, useEffect } from 'react';
import Product from '../Product';
import ProductFilter from '../ProductFilter/';
import { BASE_URL } from '../../../constants/api';
import { StyledWrapper } from './ProductListStyled';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error('Error fetching products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  return (
    <StyledWrapper products={products}>
      <div className='section wrapper '>
        <div className='search-container'>
          <ProductFilter products={products} />
        </div>
        <div className=' featured '>
          {products.map((product) => {
            const { id, title, imageUrl, price, discountedPrice, description } =
              product;
            return (
              <div>
                <Product
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  price={price}
                  discountedPrice={discountedPrice}
                  description={description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
}

export default ProductList;
