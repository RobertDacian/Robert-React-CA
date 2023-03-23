import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 5px;
      color: var(--clr-grey-3);
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  @media (max-width: 640px) {
    .cart-value {
      bottom: 10px;
      left: 14px;
    }
  }
`;
