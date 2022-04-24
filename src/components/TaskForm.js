import React, { useState } from 'react';


const TaskForm = (props) => {
  const [value, setValue] = useState(props.task.content)
  let onSubmit = (e) => {
    e.preventDefault();
    console.log('TaskForm editing task')
    let updates = {
      content: value,
      editing: false
    }
    props.onSubmit(updates)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  )
}

export default TaskForm;