import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
