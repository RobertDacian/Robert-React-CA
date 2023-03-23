import styled from 'styled-components';
export const StyledWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 10px;
  }

  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
  }

  textArea {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
    resize: vertical;
    width: 100%;
  }

  .button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: var(--clr-primary-5);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--clr-primary-4);
    }
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

export const StyledError = styled.span`
  display: block;
  color: var(--clr-red-light);
  font-size: 14px;
  margin-bottom: 20px;
`;
