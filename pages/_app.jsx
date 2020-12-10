import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import GlobalContext from '../context/globalContext';
import Layout from '../componant/Layout';

import '../styles/global.scss';


export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);

  const context = {
    func: {
      toggleMode
    },
    state: {
      darkMode
    }
  };

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalContext.Provider value={context}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </ThemeProvider >
  );

}