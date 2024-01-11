import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 36px;
  padding: 10px 20px 20px;
  background-color: #74b6c5;
  box-shadow: 0 0 14px rgb(80, 123, 176);
`;

export const AuthorBox = styled.div`
  width: max-content;
  border: 1px solid #9fd3de;
  background-color: #9fd3de;
  border-top-right-radius: 10px;
  margin-top: 10px;

  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const AuthorName = styled.p`
  color: #114e79;
  font-weight: 600;
  padding: 10px 10px 0;
`;

export const Commit = styled.p`
  padding: 15px;
  background-color: #9fd3de;
  line-height: 1.4;
`;

export const ErrorText = styled.p`
  color: #74b6c5;
  font-size: 34px;
  margin-top: 20px;
  text-align: center;
`;
