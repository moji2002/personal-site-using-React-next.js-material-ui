import { useRouter } from 'next/router';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';


function ActiveIconLink({ children, href, title, tooltipPlace }) {
    const router = useRouter();
    const active = router.pathname === href;
    const style = {
        margin: "3px",
        border: active ? "gray 2px solid" : "transparent 2px solid"
    };
    return (
        <Tooltip leaveDelay={300} title={title ? title : href} arrow placement={tooltipPlace ? tooltipPlace : "right"}>
            <IconButton onClick={() => router.push(href)} style={style}>
                {children}
            </IconButton>
        </Tooltip>

    );
}

export default ActiveIconLink;