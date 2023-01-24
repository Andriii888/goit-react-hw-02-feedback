import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button type="button" value="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" value="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" value="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};

PropTypes.FeedbackOptions={
    options: PropTypes.string.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired
}