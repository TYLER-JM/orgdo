import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { connect } from 'react-redux';
import { editTask } from '../actions/tasks';

const TaskList = (props) => (
  <div>
  {
    props.tasks.length === 0 ? (
      <p>No tasks</p>
    ) : (
      props.tasks.map((task) => (
        (task.editing) ?
          <TaskForm
            task={task}
            key={task.id}
            onSubmit={(updates) => {props.editTask(task.id, updates)}}
          />
          :
          <Task
            task={task}
            key={task.id}
            onClick={(updates) => {props.editTask(task.id, updates)}}
          />
        
      ))
    )
  }
  </div>
)

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, task) => dispatch(editTask(id, task))
})

// export default TaskList;
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);