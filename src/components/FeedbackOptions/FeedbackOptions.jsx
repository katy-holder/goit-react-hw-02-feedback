import styled from 'styled-components';

const FeedbackItem = styled.ul`
  list-style: none;
  display: flex;
`;

const FeedbackLink = styled.li`
  margin-left: 15px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  cursor: pointer;
`

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackItem>
      {options.map(option => (
        <FeedbackLink key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </FeedbackLink>
      ))}
    </FeedbackItem>
  );
};

export default FeedbackOptions;