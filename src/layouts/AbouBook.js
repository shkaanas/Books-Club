import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import whiteDecor from '../images/white-decor.png';
import Loader from '../components/Loader.js';
import coverImg from '../images/book.png';
// import { useNavigate } from 'react-router-dom';

const URL = 'https://openlibrary.org/works/';

export default function AboutBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, first_publish_date, subjects } =
            data;
          const newBook = {
            description: description
              ? description.value
              : 'No description found',
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            first_publish_date: first_publish_date
              ? first_publish_date
              : 'not found',

            subjects: subjects ? subjects.join(', ') : 'not found',
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <div>
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
              <div className="layout layout_alt">
                <img src={book?.cover_img} alt="cover" className="card" />
                <div className="">
                  <h2 className="heading heading_alt text-center pb-0">
                    {book?.title} / {book?.first_publish_date}
                  </h2>
                  <h3 className="heading heading_desc font-bold pb-0">
                    Subject: {book?.subjects}
                  </h3>
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
