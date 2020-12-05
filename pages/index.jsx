import { AppBar, Button, Container, CssBaseline, Grid, Icon, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <CssBaseline />
      <Head>
        <title>Mojtaba</title>
      </Head>
      <Container maxWidth="lg" >
        <AppBar elevation={0}>
          <Grid container direction="row" alignItems='center' justify="space-between" >
            <Typography style={{ margin: 20 }} variant="h6">Mojtaba</Typography>
            <Button variant="contained" color='secondary' style={{ margin: 20, color: "white" }}>Menu</Button>
          </Grid>
        </AppBar>
      </Container>
    </Fragment >
  );
}
