import React from 'react'

const Task = (props) => {
  return (
    <div>
      <span onClick={() => props.onClick({editing: true})}>{props.task.content}</span>
      <button onClick={() => props.removeTask()}>X</button>
    </div>
  )
}

export default Task;