import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props)
{
  return(
    <div>
      <p>Have you really tried to solve this one yourself?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
