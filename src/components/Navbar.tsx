import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Navbar extends Component {
  render() {
    const { headerContainer, headerText, headerTabContainer, headerTab } =
      styles;

    return (
      <View style={headerContainer}>
        <Text style={headerText}>OakAcademy</Text>
        <View style={headerTabContainer}>
          <Text style={headerTab}>Overview</Text>
          <Text style={headerTab}>Contact</Text>
          <Text style={headerTab}>Support</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'dimgrey',
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerText: {
    marginTop: 25,
    fontSize: 28,
    color: 'white',
  },
  headerTabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 25,
    backgroundColor: 'gainsboro',
    alignSelf: 'flex-end',
  },
  headerTab: {
    fontSize: 22,
    paddingVertical: 10,
  },
});

export default Navbar;
