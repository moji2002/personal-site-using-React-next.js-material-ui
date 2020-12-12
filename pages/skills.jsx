import { Fragment } from 'react';
import Head from "next/head";
import UnderConstruction from '../components/UnderConstruction';
import { Typography } from '@material-ui/core';

const Skills = () => (
    <Fragment>
        <Head>
            <title>Skills | Mojtaba Beheshti</title>
        </Head>
        <Typography>
            ['HTML/CSS/Sass/JS',
            <br />
            'TypeScript',
            <br />
            'Python',
            <br />
            'React.js',
            <br />
            'Next.js',
            <br />
            'Node.js',
            <br />
            'Material UI',
            <br />
            'npm/yarn',
            <br />
            'SSR/SPA',
            <br />
            'Wordpress',
            <br />
            'Photoshop']
        </Typography>
    </Fragment>
);


export default Skills;