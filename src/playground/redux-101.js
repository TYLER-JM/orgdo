import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const resetCount = () => ({
  type: 'RESET',
})
const setCount = ({count = 0} = {}) => ({
  type: 'SET',
  count
})

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + (action.incrementBy || 1)
      };
    case 'DECREMENT':
      return {
        count: state.count - (action.decrementBy || 1)
      }
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
        return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(incrementCount());
store.dispatch(setCount());
store.dispatch(setCount({count: 999}));


// console.log(store.getState());
