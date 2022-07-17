import React from 'react';
// import styled from 'styled-components';


export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log(options);
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
      {/* <li>
        <button type="button" onClick={onLeaveFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onLeaveFeedback('bad')}>
          Bad
        </button>
      </li> */}
    </ul>
  );
};
