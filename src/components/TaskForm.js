import React, { useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
//AddButton not in use ATM
import AddButton from './AddButton'

const TaskForm = (props) => {
  let [value, setValue] = useState('')
  // let [active, setActive] = useState(props.active)
  let onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(value)
    // let task = {
    //   id: uuid(),
    //   content: value,
    //   subtasks: [],
    //   parentTask: props.parentId || null
    // }
    // props.onSubmit(task)
    // setActive(false)
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          placeholder={props.placeholder}
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
    </Fragment>
      // <button type="button" onClick={() => setActive(true)}>ADD</button>
      // <AddButton/>
  )
}

export default TaskForm;