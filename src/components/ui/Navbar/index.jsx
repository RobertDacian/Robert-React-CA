import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import CartButton from '../../cart/CartIcon';
import {
  StyledWrapper,
  NavCenter,
  NavHeader,
  LogoImage,
  NavLinks,
  NavLinkList,
  NavLink,
} from './NavStyles';

export default function Navbar() {
  return (
    <StyledWrapper>
      <NavCenter>
        <NavHeader>
          <Link to='/'>
            <LogoImage src={logo} alt='dev-squid' />
          </Link>
        </NavHeader>
        <NavLinks>
          <NavLinkList>
            <NavLink>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </NavLink>
            <CartButton />
          </NavLinkList>
        </NavLinks>
      </NavCenter>
    </StyledWrapper>
  );
}
