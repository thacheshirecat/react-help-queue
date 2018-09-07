import React from 'react';
import { Link } from 'react-router-dom';

function Header()
{
  var UglyStyling = {
    backgroundColor: 'gold',
    fontFamily: 'Comic Sans MS',
    color: 'purple',
    fontSize: '57'
  };
  return (
    <div style={UglyStyling}>
      <h1>Help Queue!</h1>
      <Link className="links" to="/">Home</Link> | <Link className="links" to="/newticket">Create Ticket</Link>
      <style jsx>{`
          .links {
            color: white;
          }
          .links:hover {
            color: red;
          }
            `}</style>
    </div>
  );
}

export default Header;
