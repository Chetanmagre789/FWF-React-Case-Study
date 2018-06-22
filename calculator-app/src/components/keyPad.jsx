import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const KeyPad = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <div className="App btn-group">
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />
      </div>
      <div className="App btn-group">
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
      </div>
      <div className="App btn-group">
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="*" handleClick={handleClick} />
      </div>
      <div className="App btn-group">
        <Button label="AC" handleClick={handleClick} />
        <Button label="0" handleClick={handleClick} />
        <Button label="%" handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
      </div>
      <div className="App btn-group">
        <Button label="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

KeyPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default KeyPad;
