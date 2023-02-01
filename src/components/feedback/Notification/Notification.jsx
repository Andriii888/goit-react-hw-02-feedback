import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  return (
    <>
      <h3>{message}</h3>
    </>
  );
};

PropTypes.Notification={
    message: PropTypes.string.isRequired
}