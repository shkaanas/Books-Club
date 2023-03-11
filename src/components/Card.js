import React from 'react';
import { NavLink } from 'react-router-dom';
import boorCover from '../images/book.png';

export default function Card() {
  return (
    <div>
      <div className="card">
        <div className="content">
          <div>
            <img className="profile w-full" src={boorCover} alt="book" />
          </div>
          <div className="back from-bottom">
            <h3 className="card_heading">Wilde O.</h3>
            <h3 className="card_heading">The Fairy Tales</h3>

            <p className="card_heading card_heading__alt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
              animi doloribus reprehenderit debitis voluptas pariatur eaque!
              Rem, accusamus tempora?
            </p>
            <NavLink to="/book">
              <button className="btn btn_card mt-6">Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
