import React from 'react'

const Task = (props) => {
  return (
    <div>
      <span onClick={() => props.onClick({editing: true})}>{props.task.content}</span>
    </div>
  )
}

export default Task;