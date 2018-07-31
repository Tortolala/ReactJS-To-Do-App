import React from 'react';
import './Task.css';

const task = (props) => {
  // console.log(props);
  return(
    <div className="Task">

      <label class="checkBox"> {props.task}
        <input type="checkbox"  checked={props.status} />
        <span class="checkMark"> </span>
      </label>

    </div>
  )
}

export default task
