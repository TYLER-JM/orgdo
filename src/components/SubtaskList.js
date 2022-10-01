import React from 'react';

import Task from './Task';
import { connect } from 'react-redux';
import { editTask, addSubtask, removeSubtask } from '../actions/tasks';
import TaskForm from './TaskForm';

const SubtaskList = (props) => {

  return (<div className={`subtask-list ${ props.open ? '' : 'hidden' }`}>
  {
    props.tasks.map((task) => (        
        <Task
          task={task}
          key={task.id}
          editTask={(updates) => {props.editTask(task.id, updates)}}
          addSubtask={(newTask) => {props.addSubtask(task.id, newTask)}}
          removeTask={() => {props.removeSubtask(props.parentId, task.id)}}
        />
    )) 
  }
  <TaskForm
    active={false}
    parentId={props.parentId}
    onSubmit={(newTask) => props.addSubtask(props.parentId, newTask)}
  />
  </div>)
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addSubtask: (parentId, task) => dispatch(addSubtask(parentId, task)),
  removeSubtask: (parentId, id) => dispatch(removeSubtask(parentId, id))
})

export default connect(null, mapDispatchToProps)(SubtaskList)