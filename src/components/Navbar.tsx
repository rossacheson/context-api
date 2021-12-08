import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    const {
      headerContainer,
      headerText,
      headerTabContainer,
      headerTab,
      loginButtonText,
    } = styles;

    return (
      <AuthContext.Consumer>
        {(authContext: any) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext: any) => {
                const { isLoggedIn, changeAuthStatus } = authContext;

                const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;

                return (
                  <View style={[headerContainer, theme]}>
                    <Text style={[headerText, theme]}>OakAcademy</Text>
                    <TouchableOpacity onPress={changeAuthStatus}>
                      <Text style={[loginButtonText, theme]}>
                        {isLoggedIn ? 'Log Out' : 'Log In'}
                      </Text>
                    </TouchableOpacity>
                    <View style={headerTabContainer}>
                      <Text style={headerTab}>Overview</Text>
                      <Text style={headerTab}>Contact</Text>
                      <Text style={headerTab}>Support</Text>
                    </View>
                  </View>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
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
  loginButtonText: {
    marginTop: 15,
    fontSize: 24,
    color: 'white',
  },
});

export default Navbar;
