import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'; // ensure correct path

const HomeSection = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Welcome {user ? user.name : "Guest"}!</h1>
    </div>
  );
}

export default HomeSection;
