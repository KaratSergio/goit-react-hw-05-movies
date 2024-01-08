import styled from 'styled-components';

export const MovieListWrapper = styled.div`
  display: flex;
  gap: 40px 30px;
  flex-wrap: wrap;
`;

export const MovieListItem = styled.div`
  width: 200px;  
  text-align: center;
`;

export const MovieListLink = styled.a`
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const MovieTitle = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;
