import React, { createContext } from 'react';

interface IThemeContext {
  isDarkTheme: boolean;
  lightTheme: any;
  darkTheme: any;
  changeTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      color: '#222',
      backgroundColor: '#d8ddf1',
    },
    darkTheme: {
      color: '#fff',
      backgroundColor: '#5c5c5c',
    },
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
