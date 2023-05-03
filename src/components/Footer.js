import React from 'react';
import Container from '@mui/material/Container';
import logo from '../images/hero-logo.svg';

export default function Footer() {
  return (
    <footer>
      <div
        className="block bg_color items-center"
        style={{ minHeight: '100px' }}
      >
        <Container maxWidth="xl">
          <h3 className="desc_common desc_common_white p-0">
            Created by Anastasia Shkyrta
          </h3>
        </Container>
      </div>
    </footer>
  );
}
