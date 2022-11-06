import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TaskForm = (props) => {
  let [value, setValue] = useState(props.content || '')
  let [shiftPressed, setShiftPressed] = useState(false)

  // function checkShiftPress(event) {
  //   set
  // }


  let onSubmit = (e) => {
    e.preventDefault();
    console.log('event', e)
    let task = {
      id: props.taskId || uuid(),
      content: value,
      subtasks: props.taskSubtasks || [],
      parentId: props.parentId || null,
      open: shiftPressed // this will need to be conditional
    }
    
    props.onSubmit(task)
    e.target.reset()
    setValue('')
    props.onBlur && props.onBlur() 
  }

  return (
      <form onKeyDown={(event) => setShiftPressed(event.shiftKey)} onSubmit={onSubmit}>
        <input
          placeholder={props.placeholder}
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
          autoFocus={props.shouldFocus}
          onBlur={props.onBlur}
        />
      </form>
  )
}

export default TaskForm;