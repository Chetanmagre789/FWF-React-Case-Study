import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label } = props;
  const { handleClick } = props;
  return <input className="button" type="button" onClick={handleClick} value={label} />;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
