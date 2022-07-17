import React from 'react';
import styled from 'styled-components';
  

const StatiscticItem = styled.ul`
  list-style: none;
  font-size: 25px;
`
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatiscticItem>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total()}</span>
      </li>
      <li>
        <span>Positive feedback: {positivePercentage()} %</span>
      </li>
    </StatiscticItem>
  );
};
