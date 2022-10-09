let normalizedState = {
  byId: {
		'task1': {
			id: 'task1',
			parentId: null,
			subtasks: ['task1a'],
      content: 'todo item 1',
		},
		'task2': {
			id: 'task2',
			parentId: null,
			subtasks: [],
      content: 'todo item 2',
		},
		'task1a': {
			id: 'task1a',
			parentId: 'task1',
			subtasks: [],
      content: 'todo item 1a',
		}
},
	allIds: ['task1', 'task2', 'task1a']
}

function editTask(state, action) {
  return {
    byId: {...state.byId, [action.id]: {...state.byId[action.id], ...action.updates}},
    allIds: state.allIds
  }
}

function addTask(state, action) {
  let byId = null
  if (action.task.parentId) {
    let parentTask = state.byId[action.task.parentId]
    parentTask.subtasks = [...parentTask.subtasks, action.task.id]
    byId = {...state.byId, [action.task.parentId]: parentTask, [action.task.id]: action.task} 
  }

  return { 
    byId: byId || {...state.byId, [action.task.id]: action.task},
    allIds: [...state.allIds, action.task.id]
  }
}

function removeTask(state, action) {
    // let byIds = state.byId.map(task => {
    //   if (task.id === action.task.parentId) {
    //     return {...task, subtasks: task.subtasks.filter(id => id !== action.task.id)}
    //   }
    //   return task
    // })
    // return {
    //   byId: byIds.filter(task => task.id !== action.task.id),
    //   allIds: state.allIds.filter(id => !id === action.task.id)
    // }
}

export default (state = normalizedState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return addTask(state, action)
    case 'REMOVE_TASK':
      return removeTask(state, action)
    case 'EDIT_TASK':
      return editTask(state, action)
    default:
      return state;
  }
}

