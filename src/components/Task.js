import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'
import TaskForm from './TaskForm'

const Task = (props) => {
  const [editing, setEditing] = useState(false)
  const [open, setOpen] = useState(false)
  let subtasks = useSelector(state => state.tasks.byId.filter(task => task.parentTask === props.task.id))
  
  let editTask = (content) => {
    let updates = {
      content,
    }
    setEditing(false)
    props.editTask(updates)
  }

  return (
    <div className='task'>
    
        {editing ? 
          <TaskForm
            content={props.task.content}
            parentId={props.task.parentId}
            onSubmit={(content) => editTask(content)}
            onBlur={() => setEditing(false)}
          /> :
          <Fragment>
            <button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
            <span onClick={() => setEditing(true)}>{props.task.content}</span>
            <button onClick={() => props.removeTask()}>X</button>
          </Fragment>
        }
        
        {open && (!!props.task.subtasks.length ? 
          <SubtaskList tasks={subtasks} parentId={props.task.id}/>
          :
          <div className="subtask-list">
            <TaskForm
              placeholder="no subtasks"
              parentId={props.task.id}
              onSubmit={(newTask) => props.addSubtask(newTask)}
            />
          </div>
        )}
    
    </div>
  )
}

export default Task