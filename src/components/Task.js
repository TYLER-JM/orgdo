import React from 'react'

const Task = (props) => {
  return (
    <div>
      <span>{props.task.content}</span>
    </div>
  )
}

export default Task;