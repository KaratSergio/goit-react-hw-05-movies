import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #74b6c5, #114e79);
  margin: 0;
  font-weight: 600;
  width: 100px;
  height: 30px;
  border-top-right-radius: 10px;
  border: 2px solid #114e79;
  border-bottom: none;
  box-shadow: 0 5px 3px rgb(80, 123, 176);
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(to bottom, #114e79, #74b6c5);
  }
`;

export const Wrapper = styled.main`
  background: radial-gradient(circle at center, #114e79, #011);
  box-shadow: 0 0 14px rgb(80, 123, 176);
  padding: 16px 32px;
  display: block;
  min-height: 100vh;
  margin: 0px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  padding: 48px 240px;
  flex-grow: 1;
  justify-content: center;
  background: radial-gradient(circle at center, #114e79, #011);
  box-shadow: 0 0 14px rgb(80, 123, 176);
`;

export const PosterBox = styled.div`
  width: 350px;
  height: 525px;
`;

export const Poster = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
width: 960px;
height: 525px
  display: block;
  margin-left: 56px;
`;

export const Title = styled.h2`
  font-size: 56px;
  line-height: 1;
  margin-bottom: 32px;
  color: #74b6c5;
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  margin: 16px 0;
  color: #74b6c5;
`;

export const TextContent = styled.p`
  text-shadow: 1px 1px 1px rgb(24, 25, 25);
  font-size: 21px;
  line-height: 1.5;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const InfoItem = styled.li`
  display: flex;
  width: 80px;
  text-align: center;
  border: 1px solid #301934;
  padding: 3px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 1px 1px 1px black;

  &:hover {
    background-color: #cceeff;
  }
`;

export const InfoLink = styled(Link)`
  width: 80px;
  border: 1px solid #301934;
  color: tomato;
  font-weight: 500;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 1px 1px 1px black;

  &:hover {
    background-color: #cceeff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #99c2ff;
  }
`;

export const Loader = styled(BeatLoader)`
  margin: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  size: 150px;
`;
