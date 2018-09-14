import React from 'react';
import Moment from 'moment';
import catPic from '../assets/images/cat.jpg';
import PropTypes from 'prop-types';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event)
  {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
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

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
