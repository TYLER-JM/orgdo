import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'
import TaskForm from './TaskForm'

const Task = (props) => {
  const [editing, setEditing] = useState(false)
  const [open, setOpen] = useState(false)
  let subtasks = useSelector(state => {
    return Object.entries(state.tasks.byId)
      .filter(([,value]) => value.parentId === props.task.id)
      .map(([,value]) => value)
  })

  return (
    <div className='task'>
    
        {editing ? 
          <TaskForm
            taskId={props.task.id}
            taskSubtasks={props.task.subtasks}
            content={props.task.content}
            parentId={props.task.parentId}
            onSubmit={(updates) => props.editTask(updates)}
            onBlur={() => setEditing(false)}
          /> :
          <Fragment>
            <button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
            <span onClick={() => setEditing(true)}>{props.task.content}</span>
            <button onClick={() => props.removeTask()}>X</button>
          </Fragment>
        }
        
        {!!props.task.subtasks.length ? 
          <SubtaskList tasks={subtasks} parentId={props.task.id} open={open}/>
          :
          <div className={`subtask-list ${ open ? '' : 'hidden' }`}>
            <TaskForm
              placeholder="no subtasks"
              parentId={props.task.id}
              onSubmit={(newTask) => props.addTask(newTask)}
            />
          </div>
        }
    
    </div>
  )
}

export default Task