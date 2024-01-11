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

// ===============RatingBar======================
export const RatingBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 8px;
  position: relative; 
`;

export const FilledRating = styled.div`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: #74b6c5;
  border-radius: 5px;
  position: relative; 
`;

export const RatingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-160%, -50%);
  color: #d1cb21;
  font-weight: bold;
  
`;

export const Accent = styled.span`
  text-transform: uppercase;
  padding: 3px;
  border-radius: 8px;
`;

export const Score = styled.span`
  margin-left: 10px;
  font-weight: 600;
`;
// ==============================================

export const Poster = styled.img`
  border-radius: 10px;
  width: 350px;
  height: auto;
`;

export const MovieInfo = styled.div`
  display: block;
  margin-left: 56px;
`;

export const Title = styled.h2`
  font-size: 56px;
  line-height: 1;
  margin-bottom: 22px;
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
  width: 80px;
  text-align: center;
  border: 1px solid #301934;
  padding: 3px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    border: none;
    color: #74b6c5;
    font-weight: 900;
  }
`;

export const InfoLink = styled(Link)`
  color: #301934;
  font-weight: 500;

  :hover {
    font-weight: 900;
    color: #301934;
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
