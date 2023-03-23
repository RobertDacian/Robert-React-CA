import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (max-width: 776px) {
    flex-direction: column;
  }
`;
