import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <nav className="header__nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </nav>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
