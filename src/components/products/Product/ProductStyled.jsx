import styled from 'styled-components';

export const StyledWrapper = styled.section`
  .product-container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    position: relative;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .product-container:hover img {
    opacity: 0.5;
  }
  .product-container:hover .link {
    opacity: 1;
  }
  .discount {
    position: absolute;
    top: 0px;
    right: 0px;
    background: var(--clr-primary-5);
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: var(--clr-white);
  }

  .price-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  footer h5 {
    margin-bottom: 1rem;
  }
  @media (max-width: 776px) {
    .product-container img {
      height: 400px;
    }
  }
`;
