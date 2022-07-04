import React, { useState, Fragment } from 'react'
import AddButton from './AddButton'


/**
 * DEPRECATED
 */
const TaskForm = (props) => {
  let [value, setValue] = useState('')
  let [active, setActive] = useState(props.active)
  let onSubmit = (e) => {
    e.preventDefault();
    let updates = {
      content: value,
      editing: false
    }
    console.log('SAVING: ', updates)
    setActive(false)
    // props.onSubmit(updates)
  }
  return (
    <Fragment>
    {
      (active) ?
      <form onSubmit={onSubmit}>
        <input
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
      :
      <button type="button" onClick={() => setActive(true)}>++</button>
      // <AddButton/>
    }  
    </Fragment>
  )
}

export default TaskForm;