import React from 'react';
import { Container } from '@mui/system';
import { useAuth } from '../AuthContext';

import team from '../images/team.jpg';

export default function Profile() {
  const { currentUser } = useAuth();
  
  return (
    <div>
      <Container maxWidth="xl">
        {currentUser ? (
          <div
            className="errorPic"
            style={{ width: '500px', height: '500px', backgroundColor: 'red' }}
          ></div>
        ) : (
          <div >
            <h2 className='heading heading_alt text-center mx-auto p-0'>Do you want to be our member? Sign Up!</h2>
            <img src={team} alt="join us" className="errorPic" />
          </div>
        )}
      </Container>
    </div>
  );
}
