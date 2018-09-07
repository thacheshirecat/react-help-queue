import React from 'react';
import { Link } from 'react-router-dom';

function Header()
{
  var UglyStyling = {
    backgroundColor: 'blue',
    fontFamily: 'Comic Sans MS',
    color: 'red',
    fontSize: '57'
  };
  return (
    <div style={UglyStyling}>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
