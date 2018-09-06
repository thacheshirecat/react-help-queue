import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var VeryUglyStyling = {
    backgroundColor: 'purple',
    color: 'gold',
    fontSize: '20px'
  };
  return (
    <div style={VeryUglyStyling}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{props.time}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  time: PropTypes.string
};

export default Ticket;
