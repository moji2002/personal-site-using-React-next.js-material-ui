import { useRouter } from 'next/router';
import { IconButton } from '@material-ui/core';

function ActiveIconLink({ children, href }) {
    const router = useRouter();
    const active = router.pathname === href;
    const style = {
        margin: "3px",
        border: active ? "gray 2px solid" : "transparent 2px solid"
    };
    return (
        <IconButton onClick={() => router.push(href)} style={style}>
            {children}
        </IconButton>
    );
}

export default ActiveIconLink;