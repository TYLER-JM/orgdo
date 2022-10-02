
export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
})

export const addTask = (task) => ({
  type: 'ADD_TASK',
  task
})

export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  task
})

export const removeSubtask = (parentId, id) => ({
  type: 'REMOVE_SUB_TASK',
  parentId,
  id
})