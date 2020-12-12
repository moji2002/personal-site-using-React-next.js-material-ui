import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/green';


const light = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px",
            }
        }
    },
    typography: {
        // fontFamily: "tahoma"
    },
    palette: {
        type: 'light',
        primary: lightBlue,
        secondary: purple,
    },
});

const dark = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px",
            }
        }
    },
    typography: {
        // fontFamily: "tahoma"
    },
    palette: {
        type: 'dark',
        primary: grey,
        secondary: green
    },
});


export default { light, dark };