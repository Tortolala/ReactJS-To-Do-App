import React, { Component } from 'react';
import './TasksList.css';
import Task from '../Task/Task';

//const tasksList = (props) => {
  // console.log(props);

class TasksList extends Component {


  constructor(props) {

    super(props);

    this.state = {
        tasks: {
          1: {id:1, task: "Ordenar mi cuarto", checked: true},
          2: {id:2, task: "Tarea de compiladores enviar", checked: false},
          3: {id:3, task: "Comprar juguete Lucky", checked: false},
        }
    }

    this.handleChangeChecked = this.handleChangeChecked.bind(this);

  }

  handleChangeChecked = (taskId) => {
    const { tasks } = this.state;
    const task = tasks[taskId];

    this.setState({
      tasks: {
        ...tasks,
        [taskId]: {
          ...task,
          checked: !task.checked,
        }
      }
    });
  }

  render() {
    const { tasks } = this.state;
    const taskList = Object.values(tasks);

    return(
      <div className="TasksList">

        {
          taskList.map( task => {
            if (!task.checked) {
              return (
                  <Task
                    key={task.id}
                    id={task.id}
                    handleChangeChecked={this.handleChangeChecked}
                    task={task.task}
                    checked={task.checked}
                  />
              )
            }
            return null;
          })
        }
        {
          taskList.map( task => {
            if (task.checked) {
              return (
                  <Task
                    key={task.id}
                    id={task.id}
                    handleChangeChecked={this.handleChangeChecked}
                    task={task.task}
                    checked={task.checked}
                  />
              )
            }
            return null;
          })
        }

      </div>
    )
  }
}

export default TasksList
