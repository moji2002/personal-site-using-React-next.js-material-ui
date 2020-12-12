import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';

import { Fragment } from 'react';
import { Container } from '@material-ui/core';

function UnderConstruction() {
    return (
        <Container style={{ padding: 40 }}>
            <BuildIcon style={{ marginRight: 20 }} />
            <Typography varient="h5" display='inline'>Under Construction</Typography>
        </Container>
    );
}

export default UnderConstruction;