import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const { todoContainer, item } = styles;

    return (
      <View style={[todoContainer, theme]}>
        <Text style={[item, theme]}>Plan the family trip</Text>
        <Text style={[item, theme]}>Go shopping for dinner</Text>
        <Text style={[item, theme]}>Go for a walk</Text>
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
});

export default TodoList;
