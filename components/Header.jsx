import { useContext } from 'react';

import { AppBar, Drawer, Toolbar } from '@material-ui/core';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import HomeIcon from '@material-ui/icons/HomeRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import GlobalContext from '../context/globalContext';
import ActiveIconLink from './ActiveIconLink';
import ToggleDark from './ToggleDark';

const SlideBar = () => {
    const global = useContext(GlobalContext);

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <ActiveIconLink children={<HomeIcon />} href="/" title="Home" />
                <ActiveIconLink children={<AlternateEmailIcon />} href="/contact" title="Contact" />
                <ActiveIconLink children={<CodeIcon />} href="/skills" title="Skills" />
                <ActiveIconLink children={<DoneAllIcon />} href="/portfolio" title="Portfolio" />
                <ActiveIconLink children={<GitHubIcon />} href="/repos" title="Github Repositories" />
                <ToggleDark children={[<Brightness7Icon />, <Brightness4Icon />]} context={global} />
            </Toolbar>
        </AppBar>

    );
};

export default SlideBar;