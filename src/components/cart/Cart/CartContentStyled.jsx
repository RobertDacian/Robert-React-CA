import styled from 'styled-components';

export const StyledWrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .link-btn {
    display: block;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .min-btn {
    background: var(--clr-black);
  }

  img {
    object-fit: cover;
    width: 300px;
    height: 150px;
  }
  .col-2 {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .btns-container {
    width: 100%;
    display: flex;
    gap: 2.5rem;
    -webkit-box-align: center;
  }

  .btns-container2 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    width: 100%;
  }
  .btns {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .img-container {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  .info-container2 {
    display: flex;
    gap: 1rem;
    width: 100%;
    -webkit-box-align: center;
    flex-direction: column;
    h5 {
      text-align: end;
    }
  }

  @media (max-width: 776px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    img {
      width: 100%;
      height: 400px;
    }

    .img-container {
      flex-direction: column;
    }
    .img-container2 {
      flex-direction: row;
      width: 100%;
    }
    .btns-container {
      flex-direction: column;
    }
    .btns-container2 {
      flex-direction: column;
      align-items: stretch;
      margin-top: 2rem;
    }
  }
`;
