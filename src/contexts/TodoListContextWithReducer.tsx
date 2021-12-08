import React, { createContext, FunctionComponent, useReducer } from 'react';

import { todosReducer } from '../reducers/todosReducer';
import { ITodo } from '../interfaces/ITodo';

interface ITodoListContext {
  todos: ITodo[];
  dispatch: any;
}

export const TodoListContextWithReducer = createContext({} as ITodoListContext);

const TodoListContextProvider: FunctionComponent = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: 'Plan the family trip', id: '1' },
    { text: 'Go shopping for dinner', id: '2' },
    { text: 'Go for a walk', id: '3' },
  ] as ITodo[]);

  return (
    <TodoListContextWithReducer.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContextWithReducer.Provider>
  );
};

export default TodoListContextProvider;
