import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context.js';
import { Container } from '@mui/system';
import Loader from '../components/Loader.js';
import Card from '../components/Card.js';
import Search from '../components/Search.js';
import coverImg from '../images/hero-catalog.png';
import cover from '../images/book.png'
import whiteDecor from '../images/white-decor.png';

// https://covers.openlibrary.org/b/id/240727-S.jpg

export default function Сatalog() {
  const { books, loading, resultTitle } = useGlobalContext();

  const [booksWithCovers, setBooksWithCovers] = useState([])
  const [bookProcessing, setBookProcessing] = useState(true)
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
  //краше валідувати booksWithCovers
  if(booksWithCovers.length > 0){
    setBooksWithCovers(booksWithCovers)
  }

  }, [books])

  useEffect(() => {
    if(booksWithCovers.length > 0){
      setBookProcessing(false)
    }
  }, [booksWithCovers])
  

  //old code
  // const booksWithCovers = books.map((singleBook) => {
  //   console.log(singleBook)
  //   return {
  //     ...singleBook,
  //     // removing works to get only id
  //     id: singleBook.id.replace('/works/', ''),
  //     cover_img: singleBook.cover_id
  //       ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
  //       : cover,
  //   };
  // });

  // console.log(booksWithCovers);
  if (loading || bookProcessing) return <Loader />;
  
  // if (loading) return <Loader />;

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
