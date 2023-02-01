import React, { Component } from 'react';
import { FeedBackList } from './feedback/FeedBack/FeedBack';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedBackList good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
