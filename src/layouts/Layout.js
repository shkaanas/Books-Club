import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}
