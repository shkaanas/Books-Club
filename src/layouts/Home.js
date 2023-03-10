import React from 'react';
import Container from '@mui/material/Container';
import heroPicture from '../images/hero-picture.png';
import brownDecor from '../images/brown-decor.png';
import Card from '../components/Card.js';

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <main className="layout">
          <div className=" layout layout_alt">
            <h2 className="heading">Books for your heart and soul</h2>
            <p className="heading heading_alt">
              Some text here, even don’t know what to write
            </p>
            <button className="btn btn_custom">Show me</button>
          </div>
          <div>
            <img src={heroPicture} alt="hero image" className="image" />
          </div>
        </main>
      </Container>
      <div
        className="decor"
        style={{
          backgroundImage: `url(${brownDecor})`,
        }}
      ></div>
      <div style={{ backgroundColor: '#E9DCCB', minHeight: '100px' }}>
        <Container maxWidth="xl">
          <h3 className="heading heading_full">We’re Currently Reading</h3>
          <div className='block'>
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </div>
    </>
  );
}
