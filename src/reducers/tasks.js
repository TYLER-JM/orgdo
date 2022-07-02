let normalizedState = {
  byId: [
		{
			id: 'task1',
			parentTask: null,
			subtasks: ['task1a'],
      content: 'todo item 1',
      editing: false
		},
		{
			id: 'task2',
			parentTask: null,
			subtasks: [],
      content: 'todo item 2',
      editing: true
		},
		{
			id: 'task1a',
			parentTask: 'task1',
			subtasks: [],
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

function addSubtask(state, action) {
  let byId = state.byId.map(task => {
    if (task.id === action.parentId) {
      return {...task, subtasks: [...task.subtasks, action.task.id]}
    }
    return task
  }) 
  return {
    byId: [...byId, action.task],
    allIds: [...state.allIds, action.task.id]
  }
}

function removeSubtask(state, action) {
    let byIds = state.byId.map(task => {
      if (task.id === action.parentId) {
        return {...task, subtasks: task.subtasks.filter(id => id !== action.id)}
      }
      return task
    })
    return {
      byId: byIds.filter(task => task.id !== action.id),
      allIds: state.allIds.filter(id => !id === action.id)
    }
}

export default (state = normalizedState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {byId: [...state.byId, action.task], allIds: [...state.allIds, action.task.id]}
    case 'REMOVE_TASK':
      return {byId: state.byId.filter(task => !(task.id === action.id || task.parentTask === action.id)), allIds: state.allIds.filter(id => id !== action.id)};
    case 'EDIT_TASK':
      return editTask(state, action)
    case 'ADD_SUB_TASK':
      return addSubtask(state, action)
    case 'REMOVE_SUB_TASK':
      return removeSubtask(state, action)
    default:
      console.log('action type: ', action.type)
      return state;
  }
}

