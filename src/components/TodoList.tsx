import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TodoList extends Component {
  render() {
    const { todoContainer, item } = styles;

    return (
      <View style={todoContainer}>
        <Text style={item}>Plan the family trip</Text>
        <Text style={item}>Go shopping for dinner</Text>
        <Text style={item}>Go for a walk</Text>
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
