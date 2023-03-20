import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import whiteDecor from '../images/white-decor.png';
import Loader from '../components/Loader.js';
import coverImg from '../images/book.png';
import Rating from '@mui/material/Rating';
import { addDoc, collection } from 'firebase/firestore';
import { useAuth } from '../AuthContext';
import { db } from '../firebase';

const URL = 'https://openlibrary.org/works/';

export default function AboutBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  //for rating
  const [value, setValue] = useState(1);
  const [comment, setComment] = useState('');
  const [clicked, setClicked] = useState(false);
  const { currentUser } = useAuth();

  const commentsCollectionRef = collection(db, 'userComments');

  //saving data to the firebase
  async function createComment() {
    //also we need here info about book especially title and cover and id
    await addDoc(commentsCollectionRef, {
      title: book.title,
      cover: book.cover_img,
      bookId: `${URL}${id}`,
      comment,
      rating: value,
      author: {
        name: currentUser.displayName,
        email: currentUser.email,
        id: currentUser.uid,
      },
    });
  
    
  }

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        // console.log(data);

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
                  <button className="btn btn_custom btn_custom__sign mx-auto mb-10">
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
          {currentUser ? (
            <Container maxWidth="xl" className="flex flex-col">
              <h2 className="heading heading_alt text-center pb-0 mx-auto">
                {clicked
                  ? 'Thanks for your review!'
                  : 'Leave your comment below'}
              </h2>

              {/* here we need check with book id, but on the other page "profile" check in current user id */}
              {!clicked && (
                <div className="flex flex-col justify-center">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    sx={{
                      fontSize: '2rem',
                      justifyContent: 'center',
                      margin: '15px auto',
                      width: '150px',
                    }}
                  />
                  <textarea
                    placeholder="Such a nice book for ..."
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                    className="textarea mx-auto"
                  ></textarea>
                  <button
                    className="btn btn_custom btn_custom__sign my-5 mx-auto"
                    onClick={createComment}
                  >
                    Send
                  </button>
                </div>
              )}
            </Container>
          ) : (
            <Container maxWidth="xl">
              <div className="flex flex-col content-center">
                <h2 className="heading heading_alt text-center pb-0 mx-auto">
                  Have you read this book? Leave your review for other readers!
                </h2>
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  sx={{
                    fontSize: '2rem',
                    justifyContent: 'center',
                    margin: '15px auto',
                    width: '150px',
                  }}
                />
                <NavLink to="/signup" className="my-5 mx-auto">
                  <button className="btn btn_custom ">Share My Opinion</button>
                </NavLink>
              </div>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
}
