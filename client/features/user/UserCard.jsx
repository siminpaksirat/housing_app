import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './UserCard.css'

import { fetchAllUsers, selectAllUsers } from './allUsersSlice';


const UserCard = ({ user }) => {

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const[currentUser, setCurrentUser] = useState({})

  useEffect(()=> {
    dispatch(fetchAllUsers())
  }, [dispatch])

return (
    <>
    <h1>???</h1>
     <div className='user-card' key={user.id} onClick={()=> {
      setCurrentUser(user)
    }}>
    {/* {user.firstname}
    {user.lastname} */}
    {user.email}
    {user.password}
    </div>
    </>
)
}

UserCard.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
      })
    )
  };


export default UserCard;
