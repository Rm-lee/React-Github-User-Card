import React from 'react';

const UserCard = (props) => {
 return (
  <div>
   {props.userData.login}
  </div>
 );
};

export default UserCard;