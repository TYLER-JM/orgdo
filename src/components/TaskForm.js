import React, { useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'

const TaskForm = (props) => {
  let [value, setValue] = useState(props.content || '')


  let onSubmit = (e) => {
    e.preventDefault();

    if (props.content) {
      props.onSubmit(value)
    } else {
      let task = {
        id: uuid(),
        content: value,
        subtasks: [],
        parentTask: props.parentId || null
      }
      props.onSubmit(task)
    }
    e.target.reset()
    setValue('')
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          placeholder={props.placeholder}
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
          autoFocus
          onBlur={props.onBlur}
        />
        <button type="submit">SAVE</button>
      </form>
    </Fragment>
  )
}

export default TaskForm;