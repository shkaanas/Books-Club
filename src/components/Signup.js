import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Alert from '@mui/material/Alert';


export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //here we directly use signup function from useAuth
  const { signup } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
    }

    try{
        setError('');
        setLoading(false);
        signup(emailRef.current.value, passwordRef.current.value)
    }catch{
        setError('Faild to create an account')
        setLoading(true)
    }

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
          <h3 className="heading heading_alt heading_alt__white text-center">
            Sign up
          </h3>
          {error && <Alert  severity="error">{error}</Alert>}
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
            <input
              type="password"
              ref={passwordConfirmRef}
              placeholder="Confirm password..."
              className=" input_wrapper input input_alt"
            />
            <button className="btn_form w-full mt-12" type="submit" disabled={loading}>
              Sign Up Now
            </button>
          </form>
          <span className="link link_alt">
            Already have an account?<NavLink> Log in</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
