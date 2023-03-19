import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Alert from '@mui/material/Alert';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //here we directly use login function from useAuth
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(false);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/profile');
    } catch (error) {
      setError('Faild to log in');
    }
    setLoading(false);
  }

  return (
    <div className="relative">
      <div
        className="absolute flex"
        style={{
          height: '100vh',
          width: '100%',
          top: '-100px',
          backgroundColor: '#637562',
          zIndex: '-10',
        }}
      >
        <div className="m-auto flex flex-col ">
          <h3 className="heading heading_alt heading_alt__white text-center pb-0">
            Are you a member?
          </h3>
          <h3 className="heading heading_alt heading_alt__white text-center">
            Log in!
          </h3>
          {error && <Alert severity="error">{error}</Alert>}
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Email..."
              className="input_wrapper input input_alt"
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password..."
              className="input_wrapper input input_alt"
            />
            <button
              className="btn_form w-full mt-12"
              type="submit"
              disabled={loading}
            >
              Log In Now
            </button>
          </form>
          <NavLink to="/signup" className="link link_alt">
            Need an account? Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
