import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../features/userSlice';
export default function Home() {
  const dispatch = useDispatch();
  function handleLogOut(e) {
    e.preventDefault();
    
    dispatch(logOut());
console.log('logout')
  }
  return (
    <div>
      <div>Welcome to home page</div>
      <button onClick={(e)=>{handleLogOut(e)}}>Logout</button>
    </div>
  );
}
