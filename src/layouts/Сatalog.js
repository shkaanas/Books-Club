import React from 'react';
import { useGlobalContext } from '../context.js';
import Loader from '../components/Loader.js';

import { Container } from '@mui/system';
import Card from '../components/Card.js';
import Search from '../components/Search.js';
import coverImg from '../images/hero-catalog.png';
import whiteDecor from '../images/white-decor.png';

// https://covers.openlibrary.org/b/id/240727-S.jpg

export default function Сatalog() {
  const { books, loading, resultTitle } = useGlobalContext();
  
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing works to get only id
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  // console.log(booksWithCovers);
  if (loading) return <Loader />;

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
          <div className="block flex flex-wrap">
            <Search />
          </div>
          <div className="block">
            {booksWithCovers.slice(0, 30).map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
