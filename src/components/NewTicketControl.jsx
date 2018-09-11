import React from 'react';

class NewTicketControl extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render()
  {
    return (
      <div>
        <p>New Ticket Component</p>
      </div>
    );
  }
}

export default NewTicketControl;
