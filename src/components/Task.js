import React, { useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'
import AddButton from './AddButton'
import TaskForm from './TaskForm'

const Task = (props) => {
  const [value, setValue] = useState(props.task.content)
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

  let createTask = (content) => {
    let task = {
      id: uuid(),
      content,
      subtasks: [],
      parentTask: props.task.id
    }
    console.log('taskypoo', task)
    props.addSubtask(task)
  }

  return (
    <div className='task'>
    {
      (editing) ?
      <TaskForm
        // active={true}
        parentId={props.task.parentId}
        onSubmit={(content) => editTask(content)}
      />
      // <form onSubmit={onSubmit}>
      //   <input
      //     autoFocus
      //     defaultValue={value}
      //     onChange={(event) => setValue(event.target.value)}
      //     onBlur={() => setEditing(false)}
      //   />
      //   <button type="submit">SAVE yo</button>
      // </form> 
      :
      <Fragment>
        <button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
        <span onClick={() => setEditing(true)}>{props.task.content}</span>
        <button onClick={() => props.removeTask()}>X</button>
        {open && (!!props.task.subtasks.length ? 
          <SubtaskList tasks={subtasks} parentId={props.task.id}/>
          :
          <div className="subtask-list">
            <TaskForm
              // active={false}
              placeholder="no subtasks"
              parentId={props.task.id}
              onSubmit={(content) => createTask(content)}
              // onSubmit={(newTask) => props.addSubtask(newTask)}
            />
          </div>
          // <AddButton parentId={props.task.id} addTask={(newTask) => props.addSubtask(newTask)}/>
        )}
        
      </Fragment>
    }
    </div>
  )
}

export default Task