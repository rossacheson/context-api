import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todoContainer, item, buttonContainer, buttonText } = styles;

    return (
      <View style={[todoContainer, theme]}>
        <Text style={[item, theme]}>Plan the family trip</Text>
        <Text style={[item, theme]}>Go shopping for dinner</Text>
        <Text style={[item, theme]}>Go for a walk</Text>
        <TouchableOpacity style={buttonContainer} onPress={changeTheme}>
          <Text style={buttonText}>Change Theme</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: 'dimgrey',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default TodoList;
