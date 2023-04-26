import React from 'react';
import Rating from '@mui/material/Rating';

export default function CommentCard({ comment }) {
  return (
    <div className="profile_card">
      <img
        src={comment.cover}
        alt={comment.title}
        className="profile_card__img"
      />
      <div className="profile_card__text">
        <h3 className="heading heading_alt heading_alt__white p-0 text-start">
          {comment.title}
        </h3>
        <h3 className="heading_alt heading_alt__white heading_desc">
          Author:{' '}
          {comment.author.name !== null
            ? comment.author.name
            : comment.author.email}
        </h3>

        <Rating
          name="read-only"
          value={comment.rating}
          readOnly
          sx={{
            margin: '10px',
          }}
        />
        <p className="heading_alt heading_alt__white heading_desc">
          {comment.comment}
        </p>
      </div>
    </div>
  );
}
