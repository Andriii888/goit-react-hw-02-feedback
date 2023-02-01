// import PropTypes from "prop-types";
import React, { Component } from 'react';
import { FeedBackStyle } from './FeedBack.styled';
import { FeedbackOptions } from '../FeedBackOptions/FeedbackOptions';
import { Statistic } from '../Statistic/Statistic';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export class FeedBackList extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  onLeaveFeedbacks = e => {
    const dataName = e.currentTarget.value;
    this.setState(p => {
      const changeData = p[dataName] + 1;

      return { [dataName]: changeData };
    });

    this.countTotalFeedback();
    return this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goods = this.state.good;
    let goodsPercent = 0;
    if (total > 0) {
      goodsPercent = Math.round((goods / total) * 100);
      return goodsPercent;
    }
    return goodsPercent;
  };

  render() {
    const oneFeedback = this.countTotalFeedback() <= 0;
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <FeedBackStyle>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedbacks}
          />
        </Section>

        <Section title="Statistics">
          {oneFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </FeedBackStyle>
    );
  }
}
