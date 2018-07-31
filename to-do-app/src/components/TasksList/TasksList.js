import React from 'react';
import './TasksList.css';
import Task from '../Task/Task';

const tasksList = (props) => {
  // console.log(props);
  return(
    <div className="TasksList">

      <Task task="Ordenar mi cuarto" status="checked"/>
      <Task task="Tarea de compiladores enviar" status=""/>
      <Task task="Comprar juguete para Lucky" status="checked"/>
      <Task task="Depositar pago seguro carro" status=""/>

    </div>
  )
}

export default tasksList
