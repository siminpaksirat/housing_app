import React, { useEffect } from 'react';
import UserListHeader from './UserListHeader';
import { fetchAllUsers, selectAllUsers } from './allUsersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const UserList = () => {
  const allUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="container text-center">
      <UserListHeader />
      {allUsers.map((user) => (
        <div
          key={uuidv4()}
          className="row"
          style={{ border: '1px solid #ccc' }}
        >
          <div className="col">{user.id}</div>
          <div className="col">{user.firstName}</div>
          <div className="col">{user.lastName}</div>
          <div className="col">{user.email}</div>
          <div className="col">{user.userType}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
