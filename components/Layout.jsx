import { Fragment } from 'react';
import Head from 'next/head';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import Header from './Header';

const Layout = ({ children, debug }) => {
    return (
        <Fragment>
            <CssBaseline />
            <Head>
                <title>Mojtaba</title>
            </Head>
            <Header />
            <Container style={{ padding: 30 }}>
                {children}
            </Container>
        </Fragment>
    );
};

export default Layout;