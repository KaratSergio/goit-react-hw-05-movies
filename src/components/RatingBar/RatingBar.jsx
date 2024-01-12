import React from 'react';
import * as Styled from './RatingBar.styled';

const RatingBar = ({ score }) => {
  const stars = [];

  for (let index = 1; index <= 10; index++) {
    const fillPercentage = (score / 100) * 100;
    const starsToShow = Math.round(fillPercentage / 10);
    const fillColor =
      index <= starsToShow
        ? '#d1cb21;'
        : index - 1 < starsToShow
        ? `linear-gradient(to right, #74b6c5 ${fillPercentage - (index - 1) * 10}%, transparent ${fillPercentage - (index - 1) * 10}%)`
        : 'transparent';

    stars.push(
      <Styled.StarIcon key={index}>
        <Styled.SvgIcon
          viewBox="0 0 24 24"
          fillColor={fillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l2.4 6.6h6.6l-5.4 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-5.4-4.8h6.6l2.4-6.6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </Styled.SvgIcon>
      </Styled.StarIcon>
    );
  }

  return (
    <Styled.StarContainer>
      <Styled.RatingText>
        <Styled.Accent>rating</Styled.Accent>
        <Styled.Score>{score}%</Styled.Score>
      </Styled.RatingText>
      {stars}
    </Styled.StarContainer>
  );
};

export default RatingBar;
