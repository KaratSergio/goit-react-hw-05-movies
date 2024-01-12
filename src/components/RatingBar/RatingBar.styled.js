import styled from 'styled-components';

export const StarContainer = styled.div`
  position: relative;
  display: flex;
`;

export const RatingText = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
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

export const StarIcon = styled.span`
  display: inline-block;
`;

export const SvgIcon = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${props => props.fillColor || 'transparent'};
`;
