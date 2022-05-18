import React, { useState, Fragment } from 'react'

const Task = (props) => {
  const [value, setValue] = useState(props.task.content)
  let onSubmit = (e) => {
    e.preventDefault();
    let updates = {
      content: value,
      editing: false
    }
    props.editTask(updates)
  }
  return (
    <div>
    {
      (props.task.editing) ?
      <form onSubmit={onSubmit}>
        <input
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form> 
      :
      <Fragment>
        <button onClick={() => props.removeTask()}>X</button>
        <span onClick={() => props.editTask({editing: true})}>{props.task.content}</span>
      </Fragment>
    }
    </div>
  )
}

export default Task;