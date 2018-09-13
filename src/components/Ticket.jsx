import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){

  const ticketInfo =
    <div>
      <style jsx>{`
        div {
          background-color: purple;
          color: gold;
          font-size: 20px;
          text-align: center;
        }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <hr/>
    </div>;

  if (props.currentRouterPath === '/admin')
  {
    return (
      <div onClick={() => {props.onTicketSelection({names: props.names, locations: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
        {ticketInfo}
      </div>
    );
  }
  else
  {
    return(
      <div>
        {ticketInfo}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
