import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import logo from '../images/hero-logo.svg';

const pages = [
  {
    id: 1,
    name: 'All books',
    path: '/catalog',
  },
  {
    id: 2,
    name: 'Profile',
    path: '/profile',
  },
];

export default function Navigation(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className='header sticky top-0 z-50'>
      <Container className='header_inner'>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav ref={navRef} className='nav'>
          {pages.map((page) => (
            <NavLink key={page.id} to={page.path} className='link'>
              {page.name}
            </NavLink>
          ))}
          <button className='btn btn_custom btn_custom__sign md:ml-5'>{props.registered ? 'Sign Out' : 'Sign In'}</button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseIcon />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <MenuIcon />
        </button>
      </Container>
    </header>
  );
}
