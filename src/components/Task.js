import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'
import TaskForm from './TaskForm'

const Task = (props) => {
  const [editing, setEditing] = useState(false)
  let subtasks = useSelector(state => {
    return Object.entries(state.tasks.byId)
      .filter(([,value]) => value.parentId === props.task.id)
      .map(([,value]) => value)
  })

  return (
    <div className='task' onKeyDown={(event) => console.log(event.shiftKey)}>
    
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
            <button onClick={() => props.editTask({open: !props.task.open})}>{props.task.open ? '-' : '+'}</button>
            <span onClick={() => setEditing(true)}>{props.task.content}</span>
            <button onClick={() => props.removeTask()}>X</button>
          </Fragment>
        }
        
        {!!props.task.subtasks.length ? 
          <SubtaskList tasks={subtasks} parentId={props.task.id} open={props.task.open}/>
          :
          <div className={`subtask-list ${ props.task.open ? '' : 'hidden' }`}>
            <TaskForm
              placeholder="no subtasks"
              parentId={props.task.id}
              onSubmit={(newTask) => props.addTask(newTask)}
              shouldFocus={true}
            />
          </div>
        }
    
    </div>
  )
}

export default Task