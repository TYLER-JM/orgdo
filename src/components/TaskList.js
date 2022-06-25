import React from 'react';
import Task from './Task';
import AddButton from './AddButton';

const TaskList = (props) => (
  <div>
  {
    props.tasks.length === 0 ? (
      <p>No tasks</p>
    ) : (
      props.tasks.map((task) => (        
          <Task
            task={task}
            key={task.id}
            editTask={(updates) => props.editTask(task.id, updates)}
            addTask={(task) => props.addTask(task)}
            removeTask={() => props.removeTask(task.id)}
          />
      ))
    )
  }
  {props.tasks[props.tasks.length - 1].editing || <AddButton addTask={(task) => {props.addTask(task)}} />}
  </div>
)

export default TaskList;