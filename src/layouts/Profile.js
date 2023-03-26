import React, { useEffect, useState } from 'react';
//components
import { useAuth } from '../AuthContext';
import CommentCard from '../components/CommentCard';
//firestore
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
//mui
import { Container } from '@mui/system';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
//images
import team from '../images/team.jpg';
import profile from '../images/profile.png';

export default function Profile() {
  const { currentUser } = useAuth();
  const [commentsList, setCommentsList] = useState([]);
  const commentsCollectionRef = collection(db, 'userComments');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(commentsCollectionRef);
      setCommentsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getPosts();
    // console.log(commentsList);
  }, []);

  return (
    <div>
      {currentUser ? (
        <div>
          <div
            className="cover cover_alt flex flex-col justify-end"
            style={{
              backgroundColor: '#E9DCCB',
              minHeight: '450px',
            }}
          >
            <Container maxWidth="xl">
              <div className="layout">
                <div className="flex flex-col justify-center">
                  <img src={profile} alt="profile" className="profile_img" />
                  <span className="text-center mx-auto">
                    Edit profile
                    <ModeEditOutlinedIcon />
                  </span>
                </div>
                <div>
                  <h2 className="heading heading_alt">{currentUser.email}</h2>
                </div>
              </div>
            </Container>
          </div>
          <Container maxWidth="xl">
            <h2 className="heading heading_alt text-center mx-auto p-0">
              My rated books
            </h2>
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
