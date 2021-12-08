import React, { createContext, useState, FunctionComponent } from 'react';

interface ITodoListContext {
  todos: ITodo[];
  addTodo: (todo: string) => void;
}
interface ITodo {
  id: string;
  text: string;
}

export const TodoListContext = createContext({} as ITodoListContext);

const TodoListContextProvider: FunctionComponent = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: 'Plan the family trip', id: '1' },
    { text: 'Go shopping for dinner', id: '2' },
    { text: 'Go for a walk', id: '3' },
  ]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { text: todo, id: `${Math.random()}` }]);
  };

  return (
    <TodoListContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
