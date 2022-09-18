import React, { useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
//AddButton not in use ATM
import AddButton from './AddButton'

const TaskForm = (props) => {
  let [value, setValue] = useState('')
  let [active, setActive] = useState(props.active)
  let onSubmit = (e) => {
    e.preventDefault();
    let task = {
      id: uuid(),
      content: value,
      editing: false,
      subtasks: [],
      parentTask: props.parentId || null
    }
    props.onSubmit(task)
    setActive(false)
  }
  return (
    <Fragment>
    {
      (active) ?
      <form onSubmit={onSubmit}>
        <input
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
      :
      <button type="button" onClick={() => setActive(true)}>++</button>
      // <AddButton/>
    }  
    </Fragment>
  )
}

export default TaskForm;