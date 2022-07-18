import styled from 'styled-components';
  

const StatiscticItem = styled.ul`
  list-style: none;
  font-size: 25px;
`
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatiscticItem>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive feedback: {positivePercentage()} %</li>
    </StatiscticItem>
  );
};

export default Statistics;
