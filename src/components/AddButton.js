import React from 'react'

const AddButton = (props) => {
  const newTask = {
    content: null,
    id: 789,
    editing: true
  }
  return (
    <button onClick={() => props.addTask(newTask)}>+</button>
  )
}

export default AddButton