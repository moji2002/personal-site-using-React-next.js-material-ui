import { Fragment } from 'react';
import Head from 'next/head';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import SlideBar from './slide-bar';

const Layout = ({ children, debug }) => {
    return (
        <Fragment>
            <CssBaseline />
            <Head>
                <title>Mojtaba</title>
            </Head>
            <SlideBar />
            <Container style={{ paddingLeft: "80px" }}>
                <Grid container style={{ border: debug ? "1px yellow solid" : "" }}>
                    {children}
                </Grid>
            </Container>
        </Fragment>
    );
};

export default Layout;