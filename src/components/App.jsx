import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import { v4 } from 'uuid';

import Header from './Header';
import TicketList  from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      masterTicketList: {},
      selecetedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelecetedTicket = this.handleChangingSelecetedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket)
  {
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
    //Code For Array State
    // var newMasterTicketList = this.state.masterTicketList.slice();
    // newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    // newMasterTicketList.push(newTicket);
    // this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelecetedTicket(ticketId)
  {
    this.setState({selectedTicket: ticketId});
  }

  updateTicketElapsedWaitTime()
  {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTIcketList: newMasterTicketList});
    // If State was an Array
    // let newMasterTicketList = this.state.masterTicketList.slice();
    // newMasterTicketList.forEach((ticket) =>
    //   ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    // );
    // this.setState({masterTicketList: newMasterTicketList});
  }

  render()
  {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <TicketList ticketList={this.state.masterTicketList} />} />
          <Route
            path='/newticket'
            render={()=>
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route
            path='/admin'
            render={(props)=>
              <Admin
                ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname}
                onChangingSelectedTicket={this.handleChangingSelecetedTicket}
                selectedTicket={this.state.selectedTicket} /> } />
        </Switch>
      </div>
    );
  }

  componentDidMount()
  {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.waitTimeUpdateTimer);
  }

}

export default App;
