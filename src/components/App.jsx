import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import TicketList  from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    console.log(props);
    this.state = {
      selecetedTicket: null
    };
    this.handleChangingSelecetedTicket = this.handleChangingSelecetedTicket.bind(this);
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

  updateTicketElapsedWaitTime()
  {
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelecetedTicket(ticketId)
  {
    this.setState({selectedTicket: ticketId});
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
              <TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' component={NewTicketControl} />
          <Route
            path='/admin'
            render={(props)=>
              <Admin
                ticketList={this.props.masterTicketList}
                currentRouterPath={props.location.pathname}
                onChangingSelectedTicket={this.handleChangingSelecetedTicket}
                selectedTicket={this.state.selectedTicket} /> } />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
