import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import CommentCard from '../components/CommentCard';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Container } from '@mui/system';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import team from '../images/team.jpg';
import profile from '../images/profile.png';

export default function Profile() {
  const { currentUser } = useAuth();
  const [commentsList, setCommentsList] = useState([]);
  const commentsCollectionRef = collection(db, 'userComments');
  const [userName, setUserName] = useState('');
  const [editing, setEditing] = useState(false);
  // const [newUserEmail, setNewUserEmail] = useState();

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(commentsCollectionRef);
      setCommentsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, []);

  //editing profile
  async function updateUser(event) {
    event.preventDefault();
    const userDoc = doc(db, 'userComments', currentUser);
    await updateDoc(userDoc, {
      'author.name': `${userName}`,
    });
    // setEditing(false);
  }

  useEffect(() => {
    console.log('editing', editing)
  }, [editing]) 

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
                    src={profile}
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
                    <button className="btn_card ml-auto" onClick={updateUser}>
                      Change
                    </button>
                  </div>
                ) : (
                  <div>
                    {currentUser.displayName && (
                      <h2 className="heading heading_alt mt-8">
                        {currentUser.displayName}
                      </h2>
                    )}
                    <h2 className="heading heading_alt">{currentUser.email}</h2>
                    <button></button>
                  </div>
                )}
              </div>
            </Container>
          </div>
          <Container maxWidth="xl">
            <h2 className="heading heading_alt text-center mx-auto p-0">
              My rated books
            </h2>
            {/* <button className='btn_custom ' onClick={() => console.log('hi there')}>hi there</button> */}
            {/* ask about this logic */}
            <div className="card-wrapper">
              {commentsList.map((comment) => {
                return (
                  <div>
                    {comment.author.id === currentUser.uid && (
                      <CommentCard comment={comment} />
                    )}
                  </div>
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
