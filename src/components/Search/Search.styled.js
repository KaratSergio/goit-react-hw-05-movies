import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #ecdede;
`;

export const Input = styled.input`
  height: 22px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: 8px;
  margin-left: 8px;

  &:hover {
    border-color: #ff6347;
    box-shadow: 0 0 5px #ff6347;
  }
`;

export const Button = styled.button`
  height: 29px;
  color: #ecdede;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: color 0.3s ease;

  &:hover {
    background-color: #f86347;
  }
`;
