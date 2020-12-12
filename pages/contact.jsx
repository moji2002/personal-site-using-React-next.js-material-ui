import { Fragment } from 'react';
import Head from "next/head";
import UnderConstruction from '../components/UnderConstruction';
import { Link } from '@material-ui/core';

const Contact = () => (
    <Fragment>
        <Head>
            <title>Contact | Mojtaba Beheshti</title>
        </Head>
        <Link href="mailto:moji2002@gmail.com">
            Email
        </Link>
    </Fragment>
);


export default Contact;