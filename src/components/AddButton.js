import React from 'react'
import { v4 as uuid } from 'uuid'

const AddButton = (props) => {
  const newTask = {
    id: uuid(),
    parentTask: props.parentId || null,
    subtasks: [],
    content: null,
    editing: true
  }
  return (
    <button onClick={() => props.addTask(newTask)}>+</button>
  )
}

export default AddButton