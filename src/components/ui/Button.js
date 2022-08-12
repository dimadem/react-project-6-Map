import React from "react";
import PropTypes from 'prop-types';


function Button({ onSetRandom }) {
  return (
    <>
      <button className="ui-button" id="rerender" onClick={onSetRandom}>
        Ререндер!
      </button>
    </>
  );
}

Button.propTypes = {
  onSetRandom: PropTypes.func
}

export default Button;