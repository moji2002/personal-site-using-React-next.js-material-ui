import { useContext } from 'react';

import { Drawer } from '@material-ui/core';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import HomeIcon from '@material-ui/icons/HomeRounded';
import GitHubIcon from '@material-ui/icons/GitHub';

import GlobalContext from '../context/globalContext';
import ActiveIconLink from './ActiveIconLink';
import ToggleDark from './ToggleDark';

const SlideBar = () => {
    const global = useContext(GlobalContext);

    return (
        <Drawer open anchor="left" variant="persistent" >
            <ActiveIconLink children={<HomeIcon />} href="/"  title="Home"/>
            <ActiveIconLink children={<AlternateEmailIcon />} href="/contact" title="Contact"/>
            <ActiveIconLink children={<GitHubIcon />} href="/repos" title="Github Repositories"/>
            <ToggleDark children={[<Brightness7Icon />, <Brightness4Icon />]} context={global} />
        </Drawer >
    );
};

export default SlideBar;