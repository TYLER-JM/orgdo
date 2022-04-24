import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_TASK
const addTask = ({content = '', complete = false, completedAt = 0} = {}) => ({
  type: 'ADD_TASK',
  task: {
    id: uuidv4(),
    content,
    complete,
    completedAt
  }
})
// REMOVE_TASK
const removeTask = ({id} = {}) => ({
  type: 'REMOVE_TASK',
  id
});
// SET_STATUS
// EDIT_TASK
const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
})
// CHANGE_VIEW
// SET_TEXT_FILTER
const taskDefaultState = [];
const tasksReducer = (state = taskDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task]
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.id);
    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates,
          }
        } else {
          return task
        }
      });
    default:
      return state;
  }
}
const filtersDefaultState = {
  text: '',
  viewAs: 'list',
}
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    // case value:
      
    //   break;
  
    default:
      return state;
  }
}
const store = createStore(
  combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState())
});

const task1 = store.dispatch(addTask({content: 'build an app'}));
const task2 = store.dispatch(addTask({content: 'sell it to google'}));
store.dispatch(removeTask({id: task1.task.id}));
store.dispatch(editTask(task2.task.id, {content: 'cash out'}));

const demoState = {
  tasks: [{
    'id': 'adfa',
    'content': 'build new app',
    'complete': false,
    'createdAt': 0,
  }],
  filters: {
    text: 'build',
    viewAs: 'list', // list or org
  }
}
