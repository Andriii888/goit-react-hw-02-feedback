import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button key={options.indexOf(option)}type="button" value="good" onClick={onLeaveFeedback}>
        {option}
      </button>
    );
  });
};

PropTypes.FeedbackOptions = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
