import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  .product-filter {
    display: flex;
    width: 50%;
    flex-direction: column;
  }
  input.form-input {
    padding: 0.5rem;
    border: 1px solid var(--clr-primary-4);
    margin-bottom: 10px;
  }

  @media (max-width: 776px) {
    .product-filter {
      width: 100%;
    }
  }
`;
export const StyledError = styled.span`
  display: block;
  color: var(--clr-red-light);
  font-size: 14px;
  margin-bottom: 20px;
`;
