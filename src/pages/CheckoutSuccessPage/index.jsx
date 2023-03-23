import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CheckoutSuccessPage() {
  return (
    <StyledWrapper>
      <section className='section page-height-100'>
        <div className='container'>
          <div className='title'>
            <h1>Checkout Success</h1>
          </div>
          <Link to='/'>
            <button className='btn'>Back to products</button>
          </Link>
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 50vh;
  }
`;

export default CheckoutSuccessPage;
