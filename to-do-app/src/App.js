import React, { Component } from 'react';
import Header from './components/Header/Header';
import InputBar from './components/InputBar/InputBar';
import TasksList from './components/TasksList/TasksList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <InputBar />
        <TasksList />

      </div>
    );
  }
}

export default App;
