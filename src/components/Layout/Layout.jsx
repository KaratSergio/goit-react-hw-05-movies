import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Link, Loading } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        color={'#192734'}
        loading={true}
        fallback={<Loading aria-label="Loading Spinner" data-testid="loader" />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
