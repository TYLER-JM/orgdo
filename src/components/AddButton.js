import React from 'react'
import { v4 as uuid } from 'uuid'

const AddButton = (props) => {
  const newTask = {
    content: null,
    id: uuid(),
    editing: true
  }
  return (
    <button onClick={() => props.addTask(newTask)}>+</button>
  )
}

export default AddButton