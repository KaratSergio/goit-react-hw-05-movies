import noPhoto from '../../../images/no-photo.png';
import { Container, StyledImage, Title } from './DefaultPhoto.styled';

const DefaultPhoto = () => {
  return (
    <Container>
      <StyledImage src={noPhoto} alt="No Photo" />
      <Title>No Photo</Title>
    </Container>
  );
};

export default DefaultPhoto;
