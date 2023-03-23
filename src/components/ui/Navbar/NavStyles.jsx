import styled from 'styled-components';

// Here is a different styling approach using more than one styled component, just trying to understand different styling options

export const StyledWrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const NavCenter = styled.div`
  display: flex;
  width: 95vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    height: 1rem;
    flex-direction: column;
  }
`;

export const NavHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const LogoImage = styled.img`
  width: 175px;
  display: block !important;

  @media (max-width: 640px) {
    width: 100px;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  width: 100%;
  div:last-child {
    margin-left: auto;
  }
  a {
    color: var(--clr-primary-5);
  }

  @media (max-width: 640px) {
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    div:last-child {
      margin-left: 0;
    }
  }
`;

export const NavLink = styled.li`
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem;

  &:hover {
    border-bottom: 2px solid var(--clr-primary-7);
  }
`;
