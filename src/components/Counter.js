import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
  };

    countPositiveFeedbackPercentage = () => {
       const { good, neutral, bad } = this.state;
       return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { state } = this;
    
    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback()}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </>
    );
  }
}

export default Counter;
