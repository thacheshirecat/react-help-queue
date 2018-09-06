import React from 'react';

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
    </div>
  );
}

export default Header;
