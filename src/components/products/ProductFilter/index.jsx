import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './ProductFilterStyled';
import { StyledError } from './ProductFilterStyled';

function ProductFilter({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setIsDropdownOpen(event.target.value !== '');
  };

  const handleSelect = () => {
    setIsDropdownOpen(false);
  };

  return (
    <StyledWrapper>
      <form className='product-filter'>
        <input
          className='form-input'
          type='text'
          placeholder='Search by title'
          value={searchTerm}
          onChange={handleChange}
        />
        {isDropdownOpen && filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`} onClick={handleSelect}>
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {filteredProducts.length === 0 && searchTerm !== '' ? (
              <StyledError>{'No products found.'}</StyledError>
            ) : (
              ''
            )}
          </p>
        )}
      </form>
    </StyledWrapper>
  );
}

export default ProductFilter;
