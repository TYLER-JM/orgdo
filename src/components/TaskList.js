import React from 'react'
import { connect, useSelector } from 'react-redux'
import { editTask, addTask, removeTask, addSubtask } from '../actions/tasks'
import Task from './Task'
import TaskForm from './TaskForm'
import AddButton from './AddButton'


const TaskList = (props) => {
  let tasks = useSelector(state => state.tasks.byId.filter(task => !task.parentTask))
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
                addSubtask={(newTask) => props.addSubtask(task.id, newTask)}
                removeTask={() => props.removeTask(task.id)}
              />
          ))
        )
      }
      <TaskForm active={false} onSubmit={(newTask) => props.addTask(newTask)}/>
      {/*(tasks.length && tasks[tasks.length - 1].editing) || <AddButton addTask={(task) => {props.addTask(task)}} />*/}
    </div>
  )
  
}

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addTask: (task) => dispatch(addTask(task)),
  removeTask: (id) => dispatch(removeTask(id)),
  addSubtask: (parentId, task) => dispatch(addSubtask(parentId, task))
})

// export default TaskList;
export default connect(null, mapDispatchToProps)(TaskList);
