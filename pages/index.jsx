import { AppBar, Button, Container, CssBaseline, Grid, Icon, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import GlobalContext from '../context/globalContext';

export default function Home() {
  return (
    <GlobalContext.Consumer>
      {global => (
        <Fragment>
          <CssBaseline />
          <Head>
            <title>Mojtaba</title>
          </Head>
          <Button onClick={global.func.toggleMode}>dark</Button>
        </Fragment>)
      }
    </GlobalContext.Consumer>
  );
}
