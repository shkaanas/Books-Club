import React from 'react';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import heroPicture from '../images/hero-picture.png';
import brownDecor from '../images/brown-decor.png';
import aboutImg from '../images/hero-about.png';
import Footer from '../components/Footer.js';
import heroInsp1 from '../images/hero-insp-1.jpg';
import heroInsp2 from '../images/hero-insp-2.jpg';
import heroInsp3 from '../images/hero-insp-3.jpg';


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
            <NavLink to="/catalog">
              <button className="btn btn_custom">Show me</button>
            </NavLink>
          </div>
          <div>
            <img src={heroPicture} alt="heroImage" className="image" />
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
          <h3 className="heading heading_full">Find your inspiration here</h3>
          <div className="block">
            <img src={heroInsp1} alt="cover" className="card" />
            <img src={heroInsp2} alt="cover" className="card" />
            <img src={heroInsp3} alt="cover" className="card" />
          </div>
        </Container>
      </div>

      <Container maxWidth="xl" style={{ minHeight: '100px' }}>
        <div className="block block_margins">
          <img src={aboutImg} alt="heroImage" className="image" />
          <div className=" layout layout_alt">
            <p className="heading desc_common desc_common_green mx-4">
              Use Bookclubs to manage your library’s in-person and online book
              clubs, grow readership, and promote events all in one place.
              Create a custom book club portal for each of your clubs,
              accessible to all and tailored to your library.
            </p>
          </div>
        </div>
      </Container>

      <div
        className="block bg_green items-center"
        style={{ minHeight: '250px' }}
      >
        <Container maxWidth="xl">
          <p className="desc_common desc_common_white my-5">
            With staff shortages across the country and competing demands on
            librarians’ time, every program must be impactful and efficient.
            Running a book club offers every librarian a way to support patrons
            individually as readers while, at the very same time, hosting a
            public-facing event that fits the library’s mission.
          </p>
        </Container>
      </div>
      <Footer />
    </>
  );
}
