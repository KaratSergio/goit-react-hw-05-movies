import noPosterImage from '../../../images/no-poster.png';
import { Container, StyledImage, Title } from './DefaultImage.styled';

const DefaultImage = () => {
  return (
    <Container>
      <StyledImage src={noPosterImage} alt="No Poster" />
      <Title>No Poster</Title>
    </Container>
  );
};

export default DefaultImage;
