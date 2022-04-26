const taskDefaultState = [
  {content: 'architect app', id: 123, editing: true},
  {content: 'build out', id: 456, editing: false}
]

export default (state = taskDefaultState, action) => {
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

