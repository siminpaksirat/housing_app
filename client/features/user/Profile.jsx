import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import UserCard from './UserCard.jsx'


import {selectAllUsers } from './allUsersSlice';
import { fetchSingleUser, selectSingleUser } from './SingleUserSlice.js';


const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers)
  const username = useSelector(selectSingleUser)
  console.log(username)


  const [currentUser, setCurrentUser] = useState({})

  useEffect(()=> {

    async function fetchData() {
      try {
        dispatch(fetchSingleUser());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch])



  return (
    <>
    <h1>This is your profile</h1>


    </>
  )

};

export default Profile;
