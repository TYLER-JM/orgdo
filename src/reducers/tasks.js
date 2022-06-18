const taskDefaultState = [
  {content: 'architect app', id: 123, editing: true},
  {content: 'build out', id: 456, editing: false}
]
let normalizedState = {
  byId: [
		{
			id: 'task1',
			parentTask: null,
			childTasks: ['task1a'],
      content: 'todo item 1',
      editing: true
		},
		{
			id: 'task2',
			parentTask: null,
			childTasks: [],
      content: 'todo item 2',
      editing: false
		},
		{
			id: 'task1a',
			parentTask: 'task1',
			childTasks: [],
      content: 'todo item 1a',
      editing: false
		}
	],
	allIds: ['task1', 'task2', 'task1a']
}

function editTask(state, action) {
  return {
    byId: state.byId.map(task => {
      if (task.id === action.id) {
        return {...task, ...action.updates}
      }
      return task
    }),
    allIds: [state.allIds]
  }
}

export default (state = normalizedState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {byId: [...state.byId, action.task], allIds: [...state.allIds, action.task.id]}
    case 'REMOVE_TASK':
      return {byId: state.byId.filter(task => task.id !== action.id), allIds: state.allIds.filter(id => id !== action.id)};
    case 'EDIT_TASK':
      return editTask(state, action)
    default:
      return state;
  }
}

