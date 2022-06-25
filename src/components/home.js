import React from 'react';
import TaskList from './TaskList';
import { connect, useSelector } from 'react-redux';
import { editTask, addTask, removeTask } from '../actions/tasks';


const Home = (props) => {
  return (
    <div>
      <h2>Orgdo</h2>
      <p>welcome to the page</p>
      <TaskList
        tasks={useSelector(state => state.tasks.byId.filter(task => !task.parentTask))}
        editTask={props.editTask}
        addTask={props.addTask}
        removeTask={props.removeTask}
      />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   tasks: state.tasks.byId
// })

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task)),
  addTask: (task) => dispatch(addTask(task)),
  removeTask: (task) => dispatch(removeTask(task))
})

export default connect(null, mapDispatchToProps)(Home);