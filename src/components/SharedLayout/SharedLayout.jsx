import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, SNavLink, Container } from './SharedLayout.styled';
import Loader from '../../components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Nav>
        <SNavLink to="/">Home Page</SNavLink>
        <SNavLink to="/movies">Movies</SNavLink>
      </Nav>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
