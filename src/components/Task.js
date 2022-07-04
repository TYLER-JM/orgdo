import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'
import AddButton from './AddButton'

const Task = (props) => {
  const [value, setValue] = useState(props.task.content)
  let subtasks = useSelector(state => state.tasks.byId.filter(task => task.parentTask === props.task.id))
  
  let onSubmit = (e) => {
    e.preventDefault();
    let updates = {
      content: value,
      editing: false
    }
    props.editTask(updates)
  }

  return (
    <div className='task'>
    {
      (props.task.editing) ?
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form> 
      :
      <Fragment>
        <button onClick={() => props.removeTask()}>X</button>
        <span onClick={() => props.editTask({editing: true})}>{props.task.content}</span>
        {!!props.task.subtasks.length ? 
          <SubtaskList tasks={subtasks} parentId={props.task.id}/>
          :
          <AddButton parentId={props.task.id} addTask={(newTask) => props.addSubtask(newTask)}/>
        }
      </Fragment>
    }
    </div>
  )
}

export default Task