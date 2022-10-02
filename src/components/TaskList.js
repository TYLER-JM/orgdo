import React from 'react'
import { connect, useSelector } from 'react-redux'
import { editTask, addTask, removeTask } from '../actions/tasks'

import Task from './Task'
import TaskForm from './TaskForm'


const TaskList = (props) => {
  let tasks = useSelector(state => state.tasks.byId.filter(task => !task.parentId))

  return (
    <div className='task-list'>
      {
        tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          tasks.map((task) => (        
              <Task
                task={task}
                key={task.id}
                editTask={(updates) => props.editTask(task.id, updates)}
                addTask={(newTask) => props.addTask(newTask)}
                removeTask={() => props.removeTask(task.id)}
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
  removeTask: (id) => dispatch(removeTask(id)),
})

// export default TaskList;
export default connect(null, mapDispatchToProps)(TaskList);
