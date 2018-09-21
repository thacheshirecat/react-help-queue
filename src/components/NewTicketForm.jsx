import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import catPic from '../assets/images/cat.jpg';
import c from './../constants';

function NewTicketForm(props){

  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event)
  {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_TICKET,
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return(
    <div>
      <style jsx>{`
        button {
          background-color: red;
        }
        #names {
          width: 400px;
        }
        #location {
          width: 50px;
        }
        #issue {
          color: purple;
        }
      `}</style>
      <div>
        <form onSubmit={handleNewTicketFormSubmission}>
          <input
            placeholder='Names'
            type='text'
            id='names'
            ref={(input) => {_names = input;}}/>
          <input
            placeholder='Location'
            type='text'
            id='location'
            ref={(input) => {_location = input;}}/>
          <textarea
            placeholder='Que Problemo?'
            id='issue'
            ref={(input) => {_issue = input;}}/>
          <button type='submit'>Help!</button>
        </form>
        <img src={catPic}/>
      </div>
    </div>
  );
}

export default connect()(NewTicketForm);
