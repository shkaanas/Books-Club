import { Container } from '@mui/system';
import Card from '../components/Card.js';
import Search from '../components/Search.js';
import coverImg from '../images/hero-catalog.png';
import whiteDecor from '../images/white-decor.png';

export default function Сatalog() {
  return (
    <div>
      <div className="">
        <div
          className="cover"
          style={{
            backgroundImage: `url(${coverImg})`,
          }}
        ></div>
      </div>
      <div
        className="decor cover cover_alt"
        style={{
          backgroundImage: `url(${whiteDecor})`,
        }}
      ></div>
      <div>
        <Container maxWidth="xl">
          <div className='block flex flex-wrap'>
            <Search />
            <Search />
            <Search />

          </div>
          <div className="block">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </div>
    </div>
  );
}
