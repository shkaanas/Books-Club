import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card(book) {

  return (
    <div>
      <div className="card">
        <div className="content">
          <div className='relative'>
            <img className="card_img" src={book.cover_img} alt="cover" />
          </div>
          <div className="back from-bottom justify-between flex flex-col">
            <div>
              <h3 className="card_heading">{book.auuthor}</h3>
              <h3 className="card_heading">{book.title.substring(0,10)}</h3>
            </div>
            <NavLink to={`/book/${book.id}`} {...book}>
              <button className="btn btn_card mt-6">Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
