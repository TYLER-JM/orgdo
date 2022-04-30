
export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
})

export const addTask = (task) => ({
  type: 'ADD_TASK',
  task
})

export const removeTask = (id) => ({
  type: 'REMOVE_TASK',
  id
})