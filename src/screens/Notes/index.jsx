import React from "react";

import CheckIcon from '@mui/icons-material/Check';

import "./Notes.scss";

function Notes() {
  return (
    <>
      <div className="input-box">
        <input type="text" placeholder="Take a note..." />
        <button> <CheckIcon /></button>
      </div>
    </>
  );
}

export default Notes;
