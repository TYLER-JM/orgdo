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

export default (state = normalizedState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // return [...state, action.task]
      return {byId: [...state.byId, action.task], allIds: [...state.allIds, action.task.id]}
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

