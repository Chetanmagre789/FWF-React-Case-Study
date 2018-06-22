import React from 'react';
import PropTypes from 'prop-types';

const DisplayBox = (props) => {
  const { expression } = props;
  return (<input type="text" readOnly value={expression} className="display" />);
};

DisplayBox.propTypes = {
  expression: PropTypes.string.isRequired,
};

export default DisplayBox;
