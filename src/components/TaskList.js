import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import AddButton from './AddButton';

const TaskList = (props) => (
  <div>
  {
    props.tasks.length === 0 ? (
      <p>No tasks</p>
    ) : (
      props.tasks.map((task) => (
        (task.editing) ?
          <TaskForm
            task={task}
            key={task.id}
            onSubmit={(updates) => {props.editTask(task.id, updates)}}
          />
          :
          <Task
            task={task}
            key={task.id}
            onClick={(updates) => {props.editTask(task.id, updates)}}
            removeTask={() => {props.removeTask(task.id)}}
          />
        
      ))
    )
  }
  {props.tasks[props.tasks.length - 1].editing || <AddButton addTask={(task) => {props.addTask(task)}} />}
  </div>
)

export default TaskList;