import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';

import c from './../constants';

function Ticket(props){

  function handleSavingSelectedTicket(ticketId)
  {
    const { dispatch } = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }

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
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
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
  ticketId: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default connect()(Ticket);
