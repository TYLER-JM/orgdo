import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { editTask, addSubtask, removeSubtask } from '../actions/tasks';
import AddButton from './AddButton';

const SubtaskList = (props) => (
  <div className='subtask-list'>
  {
    props.tasks.map((task) => (        
        <Task
          task={task}
          key={task.id}
          editTask={(updates) => {props.editTask(task.id, updates)}}
          addSubtask={(newTask) => {props.addSubtask(task.id, newTask)}}
          removeTask={() => {props.removeSubtask(task.id)}}
        />
    )) 
  }
  {props.tasks[props.tasks.length - 1].editing || <AddButton addTask={(newTask) => {props.addSubtask(props.parentId, newTask)}} parentId={props.parentId} />}
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addSubtask: (parentId, task) => dispatch(addSubtask(parentId, task)),
  removeSubtask: (parentId, id) => dispatch(removeSubtask(parentId, id))
})

export default connect(null, mapDispatchToProps)(SubtaskList)