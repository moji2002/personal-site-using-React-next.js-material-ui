import { useRouter } from 'next/router';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';


function ActiveIconLink({ children, href, title, tooltipPlace = 'bottom' }) {
    const router = useRouter();
    const active = router.pathname === href;
    const style = {
        margin: "3px",
        color: 'white',
        border: active ? "white 2px solid" : "transparent 2px solid"
    };
    return (
        <Tooltip title={title ? title : href} arrow placement={tooltipPlace}>
            <IconButton onClick={() => router.push(href)} style={style}>
                {children}
            </IconButton>
        </Tooltip>

    );
}

export default ActiveIconLink;