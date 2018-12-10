import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, fetchStatusList } from '../actions';
var id = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state,
      {
        id: id++,
        text: action.text,
        active: true,
        deleted: false
      }]
    case TOGGLE_TODO:
      return state.map(e => (
        action.id === e.id ? 
        {...e, active: !e.active} : e
      ))
    case DELETE_TODO:
      return state.map(e =>(
        action.id === e.id ? 
        {...e, deleted: !e.deleted} : e
      ));
    case fetchStatusList.RECEIVE_TODO_SUCCESS:
      return action.todos.map(text => ({
        id: id++,
        text,
        active: true,
        deleted: false 
      }));
    default:
      return state;
  }
}

export default todos;