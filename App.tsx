import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContext';
import AuthContextProvider from './src/contexts/AuthContext';
// import TodoListContextProvider from './src/contexts/TodoListContext';
import TodoListContextProvider from './src/contexts/TodoListContextWithReducer';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <TodoListContextProvider>
            <TodoList />
          </TodoListContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
