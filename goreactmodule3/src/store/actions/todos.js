export const addTodo = text => ({ type: 'ADD_TODO', payload: { text } });

export const removerTodo = id => ({
  type: 'REMOVER_TODO',
  payload: { id },
});
