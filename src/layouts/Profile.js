import React from 'react';
import { Container } from '@mui/system';
import { useAuth } from '../AuthContext';
import team from '../images/team.jpg';
import profile from '../images/profile.png';
import coverImg from '../images/book.png';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <div>
          <div
            className="cover cover_alt flex flex-col justify-end"
            style={{
              backgroundColor: '#E9DCCB',
              minHeight: '400px',
            }}
          >
            <Container maxWidth="xl">
              <div className="layout">
                <img src={profile} alt="profile" className="profile_img" />
                <div>
                  <h2 className="heading heading_alt">{currentUser.email}</h2>
                  <span>
                    <ModeEditOutlinedIcon /> Edit profile
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <Container maxWidth="xl">
            <h2 className="heading heading_alt text-center mx-auto p-0">
              My rated books
            </h2>
            <div className="card-wrapper">
              <div className="profile_card">
                <img src={coverImg} alt="cover" className="profile_card__img" />
                <div className="profile_card__text">
                  <h3 className="heading heading_alt heading_alt__white p-0 text-start">
                    bla bla bla
                  </h3>
                  <h3 className="heading_alt heading_alt__white heading_desc">
                    Genre: bla bla bla
                  </h3>
                  <span>stars here</span>
                  <p className="heading_alt heading_alt__white heading_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Container maxWidth="xl">
          <h2 className="heading heading_alt text-center mx-auto p-0">
            Do you want to be our member? Sign Up!
          </h2>
          <img src={team} alt="join us" className="errorPic" />
        </Container>
      )}
    </div>
  );
}
