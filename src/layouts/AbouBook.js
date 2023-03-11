import { Container } from '@mui/system';
import Card from '../components/Card.js';
import whiteDecor from '../images/white-decor.png';

export default function AboutBook() {
  return (
    <div>
      <div className="">
        <div
          className="cover"
          style={{
            backgroundColor: '#E9DCCB',
          }}
        >
          <div
            className="layout"
            style={{
              backgroundColor: '#E9DCCB',
            }}
          >
            <Container maxWidth="xl">
              <div className="layout">
                <Card />
                <div className="">
                  <h2 className="heading heading_alt text-left pb-0">
                    The Fairy Tales
                  </h2>
                  <h2 className="heading heading_alt text-left">Wilde O.</h2>
                  <h3 className="heading heading_desc font-bold">
                    Genre: fairy tales
                  </h3>
                  <p className="heading heading_desc pb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="btn btn_custom btn_custom__sign">
                    download
                  </button>
                </div>
              </div>
            </Container>
          </div>
          <div
            className="decor decor_alt"
            style={{
              backgroundImage: `url(${whiteDecor})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
