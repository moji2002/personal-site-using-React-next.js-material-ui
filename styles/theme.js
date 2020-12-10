import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


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
        primary: green,
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
        primary: {
            main: "#f50057",  //pink
            dark: "#f57c00",   //orange
            light: "#303f9f" //blue
        },
        secondary: {
            main: green[900],
        },
    },
});


export default { light, dark };