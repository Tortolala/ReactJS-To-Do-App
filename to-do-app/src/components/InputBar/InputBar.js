import React from 'react';
import './InputBar.css';

const inputBar = (props) => {
  // console.log(props);
  return(
    <div className="InputBar">

      <input placeholder="New task" className="textBox" />
      <button className="addButton"> ADD </button>

    </div>
  )
}

export default inputBar
