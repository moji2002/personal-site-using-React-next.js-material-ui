import '../styles/global.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );

}