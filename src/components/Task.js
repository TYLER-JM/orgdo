import React, { useState, Fragment } from 'react'
import { connect, useSelector } from 'react-redux'
import SubtaskList from './SubtaskList'

const Task = (props) => {
  const [value, setValue] = useState(props.task.content)
  let onSubmit = (e) => {
    e.preventDefault();
    let updates = {
      content: value,
      editing: false
    }
    props.editTask(updates)
  }
  return (
    <div>
    {
      (props.task.editing) ?
      <form onSubmit={onSubmit}>
        <input
          defaultValue={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SAVE</button>
      </form> 
      :
      <Fragment>
        <button onClick={() => props.removeTask()}>X</button>
        <span onClick={() => props.editTask({editing: true})}>{props.task.content}</span>
        {!!props.task.subtasks.length && <SubtaskList
          tasks={useSelector(state => state.tasks.byId.filter(task => task.parentTask === props.task.id))}
          editTask={(updates) => props.editTask(props.task.id, updates)}
          addSubtask={(task) => props.addSubtask(props.task.id, task)}
          removeSubtask={(taskId) => props.removeSubtask(props.task.id, taskId)}
        />}
      </Fragment>
    }
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addSubtask: (parentId, task) => dispatch(addSubtask(parentId, task)),
  removeSubtask: (parentId, id) => dispatch(removeSubtask(parentId, id))
})

export default connect(null, mapDispatchToProps)(Task)