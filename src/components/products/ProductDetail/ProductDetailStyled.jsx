import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    gap: 2rem;
    justify-items: center;
    align-items: start;
  }
  .info-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }
  .product-image {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
  .product-desc {
    width: 100%;
  }

  .discount {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price-info {
    margin: 1rem 0 0.5rem;
    p {
      color: var(--clr-primary-5);
    }
  }
  hr {
    margin-top: 2rem;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      margin-bottom: 0.5rem;
    }
  }
  .flex-dir-col {
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .review {
    margin-bottom: 0.5rem;
  }
  .user-review {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    span {
      color: var(--clr-grey-4);
    }
  }
  @media (max-width: 776px) {
    .section.container {
      grid-template-columns: 1fr;
    }
    .product-image {
      height: 400px;
    }
  }
`;
