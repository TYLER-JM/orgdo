import React from 'react';
import Task from './Task';
import AddButton from './AddButton';

const SubtaskList = (props) => (
  <div>
  {
    props.tasks.map((task) => (        
        <Task
          task={task}
          key={task.id}
          editTask={(updates) => {props.editTask(task.id, updates)}}
          addTask={(task) => {props.addSubtask(task)}}
          removeTask={() => {props.removeSubtask(task.id)}}
        />
    )) 
  }
  </div>
)

export default SubtaskList;