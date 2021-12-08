import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';
import { TodoListContextWithReducer } from '../contexts/TodoListContextWithReducer';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  // const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { todos, dispatch } = useContext(TodoListContextWithReducer);

  const handleChange = (text: string) => {
    setTodo(text);
  };

  const handleAddTodoPress = () => {
    // addTodo(todo);
    dispatch({ type: 'ADD_TODO', text: todo });
    setTodo('');
  };

  const handleRemoveTodo = (id: string) => {
    // removeTodo(id);
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const { todoContainer, listItem, buttonContainer, buttonText, input } =
    styles;

  return (
    <View style={[todoContainer, theme]}>
      {todos.length ? (
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
                <Text style={[listItem, theme]}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(todo) => todo.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={[listItem, theme]}>You have no todos</Text>
      )}
      <TextInput
        value={todo}
        onChangeText={(text) => handleChange(text)}
        style={input}
      />
      <TouchableOpacity style={buttonContainer} onPress={handleAddTodoPress}>
        <Text style={buttonText}>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttonContainer} onPress={changeTheme}>
        <Text style={buttonText}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: 'dimgrey',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 15,
    padding: 5,
  },
});

export default TodoList;
