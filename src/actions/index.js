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

export const fetchStatusList = {
  REQUEST_TODO: 'REQUEST_TODO',
  RECEIVE_TODO_SUCCESS: 'RECEIVE_TODO_SUCCESS',
  RECEIVE_TODO_FAIL: 'RECEIVE_TODO_FAIL',
}

export const fetchTodo = () => {
  return (dispatch, getState) => {
    dispatch(requestTodo)
    return fetch('/test.json')
      .then(handleErrors)
      .then(data => data.json())
      .then(json => dispatch(receiveTodoSuccess(json)))
      .catch(err => dispatch(receiveTodoFail()))
  }
}

const requestTodo = () => ({
  type: fetchStatusList.REQUEST_TODO
})

const receiveTodoSuccess = ({data}) => ({
  type: fetchStatusList.RECEIVE_TODO_SUCCESS,
  todos: data,
  receivedAt: Date.now()
})

const receiveTodoFail = () => ({
  type: fetchStatusList.RECEIVE_TODO_FAIL,
  todos: [],
  receivedAt: Date.now()
})

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
