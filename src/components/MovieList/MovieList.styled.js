import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListWrapper = styled.div`
  display: flex;
  gap: 40px 30px;
  flex-wrap: wrap;
  justify-content: center;
  background: radial-gradient(circle at center, #114e79, #011);
  box-shadow: 0 0 14px rgb(80, 123, 176);
  padding: 20px;
`;

export const MovieListItem = styled.div`
  width: 150px;
  text-align: center;
`;

export const MovieListLink = styled(Link)`
  color: #ecdede;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 5px #ff6347;
  }
`;

export const MovieTitle = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Helvetica Neue';
  letter-spacing: 1px;
  font-weight: 400;
`;
