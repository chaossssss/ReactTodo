// 设置dispatch
let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export const delTodo = id => {
  return {
    type: 'DEL_TODO',
    id
  }
}
// todo列表状态
export const setVisibilityFilter = filter => {
  console.log("filter", filter)
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
// todo单项状态
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}