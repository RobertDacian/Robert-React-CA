import styled from 'styled-components';
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: transparent;
  height: 0;

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
`;
