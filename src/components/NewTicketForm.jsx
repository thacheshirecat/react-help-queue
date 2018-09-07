import React from 'react';
import catPic from '../assets/images/cat.jpg';

function NewTicketForm(){
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
        <form>
          <input
            placeholder='Names'
            type='text'
            id='names'/>
          <input
            placeholder='Location'
            type='text'
            id='location'/>
          <textarea
            placeholder='Que Problemo?'
            id='issue' />
          <button type='submit'>Help!</button>
        </form>
        <img src={catPic}/>
      </div>
    </div>
  );
}

export default NewTicketForm;
