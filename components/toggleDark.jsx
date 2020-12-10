import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const ToggleDark = ({ children, context, title, tooltipPlace }) => {
    const style = {
        margin: "3px",
        border: "transparent 2px solid"
    };

    return (
        <Tooltip  leaveDelay={300} title={title ? title : 'Dark Mode'} arrow placement={tooltipPlace ? tooltipPlace : "right"}>
            <IconButton style={style} onClick={context.func.toggleMode} >
                {(context.state.darkMode) ? children[0] : children[1]}
            </IconButton>
        </Tooltip>
    );
};

export default ToggleDark;

