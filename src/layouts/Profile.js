import { Container } from '@mui/system';
import loginImg from '../images/log_in.jpg';

export default function Profile(props) {
  return (
    <div>
      <Container maxWidth="xl">
        {props.registered ? (
          <div
            className="errorPic"
            style={{ width: '500px', height: '500px', backgroundColor: 'red' }}
          ></div>
        ) : (
          <div
            className="errorPic"
            style={{ width: '500px', height: '500px', backgroundColor: 'green' }}
          ></div>
          // <img src={loginImg} alt="log in" className="errorPic" />
        )}
      </Container>
    </div>
  );
}
