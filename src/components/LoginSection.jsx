import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { login } from '../feaures/userSlice'; // Correct the path if necessary

const LoginSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    //======================redux walaa part
    dispatch(login({  
      name: name,
      email: email,
      password: password,
      loggedIn: true,
      //======================redux walaa part
    }));
    navigate('/Home'); // Navigate to homepage after login
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <h1 className='text-3xl mb-6 pb-4'>Login Here</h1>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='min-w-[380px] px-4 py-2 mb-4 border border-black rounded' />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='min-w-[380px] px-4 py-2 mb-4 border border-black rounded' />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='min-w-[380px] px-4 py-2 mb-4 border border-black rounded' />
        <button type="submit" className='px-6 py-3 mt-4 bg-black text-white text-sm font-medium rounded'>Login</button>
      </form>
    </div>
  );
};

export default LoginSection;
