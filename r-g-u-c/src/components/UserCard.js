import React from 'react';

const UserCard = (props) => {
 return (
  <div className="user-card">
   <p>Name {props.userData.login}</p>
   <p>id {props.userData.id}</p>
   <p> url {props.userData.url}</p>
   <p>repos {props.userData.repos_url}</p>
  </div>
 );
};

export default UserCard;