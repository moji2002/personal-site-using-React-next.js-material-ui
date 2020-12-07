import { IconButton } from '@material-ui/core';

const ToggleDark = ({ children, context }) => {
    const style = {
        margin: "3px",
        border: "transparent 2px solid"
    };

    return (
        <IconButton style={style} onClick={context.func.toggleMode} >
            {(context.state.darkMode) ? children[0] : children[1]}
        </IconButton>
    );
};

export default ToggleDark;

