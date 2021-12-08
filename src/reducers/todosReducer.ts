import { ITodo } from '../interfaces/ITodo';

export const todosReducer = (state: ITodo[], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, id: `${Math.random()}` }];
    case 'REMOVE_TODO':
      return state.filter((todo: ITodo) => todo.id !== action.id);
    default:
      return state;
  }
};
