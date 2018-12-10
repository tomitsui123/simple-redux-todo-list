let id = 0;
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  id: id++,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_INACTIVE = 'SHOW_INACTIVE';

export const statusList = [
  { type: SHOW_ALL, text: 'All' },
  { type: SHOW_ACTIVE, text: 'Active' },
  { type: SHOW_INACTIVE, text: 'Inactive' }
]

export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleFilter = filter => ({
  type: TOGGLE_FILTER,
  filter
})