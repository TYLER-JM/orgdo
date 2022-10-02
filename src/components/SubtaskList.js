import React from 'react';
import { connect } from 'react-redux';
import { editTask, addTask, removeSubtask } from '../actions/tasks';

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
          removeTask={() => {props.removeSubtask(props.parentId, task.id)}}
        />
    )) 
  }
  <TaskForm
    parentId={props.parentId}
    placeholder='not the first subtask'
    onSubmit={(newTask) => props.addTask(newTask)}
  />
  </div>)
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addTask: (task) => dispatch(addTask(task)),
  removeSubtask: (parentId, id) => dispatch(removeSubtask(parentId, id))
})

export default connect(null, mapDispatchToProps)(SubtaskList)