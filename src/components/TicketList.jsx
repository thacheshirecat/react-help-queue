import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato & Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp',
    time: '5 Minutes'
  },
  {
    names: 'Slater & Kelly',
    location: '4B',
    issue: 'Fox picture TOO BIG.',
    time: '3 Minutes'
  },
  {
    names: 'Billy & Marie',
    location: '9F',
    issue: 'Keycard not working',
    time: 'NaN'
  },
  {
    names: 'James & Derek',
    location: 'F4',
    issue: 'Can\'t brain good',
    time: '9999999 Minutes'
  }
];




function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          time={ticket.time}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
