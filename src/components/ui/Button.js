import React from "react";

export default function Button(props) {
  return (
    <>
      <button className="ui-button" id="rerender" onClick={props.onSetRandom}>
        Ререндер!
      </button>
    </>
  );
}
