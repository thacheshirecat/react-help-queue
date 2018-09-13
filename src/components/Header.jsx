import React from 'react';
import { Link } from 'react-router-dom';

function Header()
{
  var UglyStyling = {
    backgroundColor: 'gold',
    fontFamily: 'Comic Sans MS',
    color: 'purple',
    fontSize: '30'
  };
  return (
    <div style={UglyStyling}>
      <h1>Help Queue!</h1>
      <Link to='/'>Home</Link> | <Link className='links' to='/newticket'>Create Ticket</Link> | <Link className='links' to='/admin'>Admin</Link>
    </div>
  );
}

export default Header;
