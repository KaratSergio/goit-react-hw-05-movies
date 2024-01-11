import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 36px;
`;

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

export const ActorCard = styled.div`
  max-width: 150px;
`;

export const Photo = styled.img`
  width: 150px;
  height: 220px;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid #fff;
`;

export const ActorName = styled.p`
color: #fff;
`;

export const ActorRole = styled.p`
color: #74b6c5;
font-size: 14px;
padding-top: 5px;
`;

export const ErrorText = styled.p`
color: #74b6c5;
font-size: 34px;
margin-top: 20px;
text-align: center;
`;