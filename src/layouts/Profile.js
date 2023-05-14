import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import CommentCard from '../components/CommentCard';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Container } from '@mui/system';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import team from '../images/team.jpg';
import profile from '../images/profile.png';

export default function Profile() {
  const { currentUser, updating } = useAuth();
  const [commentsList, setCommentsList] = useState([]);
  const commentsCollectionRef = collection(db, 'userComments');
  const [userName, setUserName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(commentsCollectionRef);
      setCommentsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getPosts();
  }, []);

  function updateUser() {
    let tempName = userName.trim();
    if (tempName.replace(/[^\w\s]/gi, '').length !== 0) {
      updating(userName, photo);
    }
    setEditing(false);
  }

  return (
    <div>
      {currentUser ? (
        <div>
          <div
            className="cover cover_alt flex flex-col justify-end"
            style={{
              backgroundColor: '#E9DCCB',
              minHeight: '500px',
            }}
          >
            <Container maxWidth="xl">
              <div className="layout">
                <div className="flex flex-col justify-center">
                  <img
                    src={currentUser.photoURL ? currentUser.photoURL : profile}
                    alt="profile"
                    className="profile_img mx-auto mb-2"
                  />
                  {!editing && (
                    <button
                      className="btn_card"
                      type="button"
                      onClick={() => setEditing(true)}
                    >
                      Edit profile
                      <ModeEditOutlinedIcon className="ml-4" />
                    </button>
                  )}
                </div>

                {editing ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your nickname..."
                      className="input_wrapper input input_alt"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Photo URL..."
                      className="input_wrapper input input_alt"
                      onChange={(event) => setPhoto(event.target.value)}
                    />
                    <button className="btn_card mr-auto" onClick={updateUser}>
                      Change
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-start">
                    {currentUser.displayName && (
                      <h2 className="heading heading_alt mt-8">
                        {currentUser.displayName}
                      </h2>
                    )}
                    <h2 className="heading heading_alt">{currentUser.email}</h2>
                  </div>
                )}
              </div>
            </Container>
          </div>
          <Container maxWidth="xl">
            <h2 className="heading heading_alt text-center mx-auto p-0">
              My rated books
            </h2>
            <div className="card-wrapper">
              {commentsList.map((comment) => {
                return (
                  comment.author.id === currentUser.uid && (
                    <CommentCard key={comment.id} comment={comment} />
                  )
                );
              })}
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
