import { Outlet } from 'react-router-dom';
import { StyledLink, LinksNav } from './Header.styled';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <LinksNav className="header__nav">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink className="nav-link" to="/movies">
              Movies
            </StyledLink>
          </LinksNav>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
