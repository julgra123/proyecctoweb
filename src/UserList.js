import React from 'react';
import User from './User';
import {Posts} from './Posts'

const usersData = [
  { id: 1, name: 'Usuario 1', image: 'https://robohash.org/usuario1' },
  { id: 2, name: 'Usuario 2', image: 'https://robohash.org/usuario2' },
  { id: 3, name: 'Usuario 3', image: 'https://robohash.org/usuario3' },
];

function UserList() {
  return (
    <div className="user-list">
      {usersData.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default UserList;