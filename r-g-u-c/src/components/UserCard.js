import React from 'react';

const UserCard = (props) => {
 return (
  <div>
   <div className="user-card">
    <h2>User</h2>
    <p>Name {props.userData.login}</p>
    <p>id {props.userData.id}</p>
    <p> url {props.userData.url}</p>
    <p>repos {props.userData.repos_url}</p>
   </div>
   <div className="followers">
    <h2>Followers</h2>
    {props.followers.map((user,index) => (
    <p>{user.login}</p>
    ))}
   </div>
  </div>

 );
};

export default UserCard;