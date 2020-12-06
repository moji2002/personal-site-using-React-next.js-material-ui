import { useState, useContext, Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import theme from '../styles/theme';
import GlobalContext from '../context/globalContext';
import '../styles/global.scss';


export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(!darkMode);

  const context = {
    func:{
      toggleMode
    }
  }

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalContext.Provider value={context}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider >
  );

}