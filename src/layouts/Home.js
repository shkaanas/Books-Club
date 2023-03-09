import React from 'react';
import Container from '@mui/material/Container';
import heroPicture from '../images/hero-picture.png';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <header className="layout">
        <div className=' layout layout_alt'>
          <h2 className='heading'>Books for your heart and soul</h2>
          <p className='heading heading_alt'>Some text here, even don’t know what to write</p>
          <button className='btn btn_custom'>Show me</button>
        </div>
        <div>
          <img src={heroPicture} alt='hero image' className='image'/>
        </div>
      </header>
    </Container>
  );
}
