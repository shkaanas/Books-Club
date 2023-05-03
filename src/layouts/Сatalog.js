import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context.js';
import { Container } from '@mui/system';
import Loader from '../components/Loader.js';
import Card from '../components/Card.js';
import Search from '../components/Search.js';
import coverImg from '../images/hero-catalog.png';
import cover from '../images/book.png';
import whiteDecor from '../images/white-decor.png';
import Pagination from '@mui/material/Pagination';
import usePagination from '../components/Pagination';

// https://covers.openlibrary.org/b/id/240727-S.jpg

export default function Сatalog() {
  const { books, loading, resultTitle } = useGlobalContext();

  const [booksWithCovers, setBooksWithCovers] = useState([]);
  const [bookProcessing, setBookProcessing] = useState(true);

  const [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(booksWithCovers.length / PER_PAGE);
  const _DATA = usePagination(booksWithCovers, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    const booksWithCovers = books.map((singleBook) => {
      return {
        ...singleBook,
        // removing works to get only id
        id: singleBook.id.replace('/works/', ''),
        cover_img: singleBook.cover_id
          ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
          : cover,
      };
    });
    
    if (booksWithCovers.length > 0) {
      setBooksWithCovers(booksWithCovers);
    }
  }, [books]);

  useEffect(() => {
    if (booksWithCovers.length > 0) {
      setBookProcessing(false);
    }
  }, [booksWithCovers]);

  if (loading || bookProcessing) return <Loader />;

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
      <Container maxWidth="xl" className="decor_alt">
        <div className="block">
          <Search updatePagy={setPage} data={_DATA}/>
        </div>
        <div className="block">
          {_DATA.currentData().map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
        <div className="block mt-10">
          <Pagination
            count={count}
            size="large"
            page={page}
            onChange={handleChange}
          />
        </div>
      </Container>
    </div>
  );
}
