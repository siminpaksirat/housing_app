import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, selectAllUsers } from '../features/user/allUsersSlice.js';

import User from '../features/user/UserCard.jsx';

import './AllUsers.css'
import UserCard from '../features/user/UserCard.jsx';


function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
//   console.log('this is users', users)



  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchAllUsers());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);


  return (
    <>

<div className="users-wrapper">
        <h1>Users</h1>
        <div>
          {users && users.length > 0 ? (
            users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>

      </>


  );
}




export default AllUsers;


// {users && users.map((user)=> {
//     <UserCard key={user.id} user={user}/>
// })}
