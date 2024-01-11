import styled from 'styled-components';

export const RatingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-448%, -220%);
  color: #114e79;
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

export const StarContainer = styled.div`
position: relative;
  display: flex;
`;

export const StarIcon = styled.span`
  display: inline-block;
`;

export const SvgIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${(props) => props.starColor || 'transparent'};
`;
