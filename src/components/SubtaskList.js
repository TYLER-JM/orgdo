import React from 'react';
import { connect } from 'react-redux';
import { editTask, addTask, removeTask } from '../actions/tasks';

import Task from './Task';
import TaskForm from './TaskForm';

const SubtaskList = (props) => {

  return (<div className={`subtask-list ${ props.open ? '' : 'hidden' }`}>
  {
    props.tasks.map((task) => (        
        <Task
          task={task}
          key={task.id}
          editTask={(updates) => {props.editTask(task.id, updates)}}
          addTask={(newTask) => {props.addTask(newTask)}}
          removeTask={() => {props.removeTask(task)}}
        />
    )) 
  }
  <TaskForm
    parentId={props.parentId}
    placeholder='not the first subtask'
    onSubmit={(newTask) => props.addTask(newTask)}
    shouldFocus={false}
  />
  </div>)
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addTask: (task) => dispatch(addTask(task)),
  removeTask: (task) => dispatch(removeTask(task))
})

export default connect(null, mapDispatchToProps)(SubtaskList)