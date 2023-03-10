import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
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

export default function Navigation() {
  const navRef = useRef();
  const [registered, setRegistered] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className='header '>
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
          <button className='btn btn_custom btn_custom__sign md:ml-5'>{registered ? 'Sign Out' : 'Sign In'}</button>
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
