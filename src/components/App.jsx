import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import TicketList  from './TicketList';
import NewTicketControl from './NewTicketControl';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket)
  {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render()
  {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
