import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/tasks';

export default () => {
  const store = createStore(
    combineReducers({
      tasks: taskReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}