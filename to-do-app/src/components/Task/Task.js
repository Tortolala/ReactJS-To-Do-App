import React from 'react';
import './Task.css';

const task = (props) => {
  // console.log(props);
  return(
    <div className="Task">

      <label className="checkBox"> {props.task}
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() => props.handleChangeChecked(props.id)} />
        <span className="checkMark"> </span>
      </label>

    </div>
  )
}

export default task
