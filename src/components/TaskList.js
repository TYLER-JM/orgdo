import React from 'react'
import { connect } from 'react-redux'
import { editTask, addTask, removeTask } from '../actions/tasks'

import Task from './Task'
import TaskForm from './TaskForm'

const TaskList = (props) => {

  return (
    <div className='task-list'>
      {
        props.tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          props.tasks.map((task) => (        
              <Task
                task={task}
                key={task.id}
                editTask={(updates) => props.editTask(task.id, updates)}
                addTask={(newTask) => props.addTask(newTask)}
                removeTask={() => props.removeTask(task)}
              />
          ))
        )
      }
      <TaskForm
        placeholder='root list task'
        onSubmit={(task) => props.addTask(task)}
      />
    </div>
  )
  
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addTask: (task) => dispatch(addTask(task)),
  removeTask: (task) => dispatch(removeTask(task)),
})

const mapStateToProps = (state) => {
  let rootTasks = Object.entries(state.tasks.byId)
    .filter(([,value]) => value.parentId === null)
    .map(([,value]) => value)
  return {tasks: rootTasks}
}

// export default TaskList;
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
