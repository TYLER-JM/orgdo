import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TaskForm = (props) => {
  let [value, setValue] = useState(props.content || '')


  let onSubmit = (e) => {
    e.preventDefault();
    console.log('event', e)
    let task = {
      id: props.taskId || uuid(),
      content: value,
      subtasks: props.taskSubtasks || [],
      parentId: props.parentId || null,
      open: false // this will need to be conditional
    }
    
    props.onSubmit(task)
    e.target.reset()
    setValue('')
    props.onBlur && props.onBlur() 
  }

  return (
      <form onSubmit={onSubmit}>
        <input
          placeholder={props.placeholder}
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
          autoFocus
          onBlur={props.onBlur}
        />
      </form>
  )
}

export default TaskForm;