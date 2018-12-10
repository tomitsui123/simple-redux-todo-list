var id = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
      {
        id: id++,
        text: action.text,
        active: true,
        deleted: false
      }]
    case 'TOGGLE_TODO':
      return state.map(e => (
        action.id === e.id ? 
        {...e, active: !e.active} : e
      ))
    case 'DELETE_TODO':
      return state.map(e =>(
        action.id === e.id ? 
        {...e, deleted: !e.deleted} : e
      ));
    default:
      return state;
  }
}

export default todos;