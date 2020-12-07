import { useContext} from 'react';

import { Drawer } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import HomeIcon from '@material-ui/icons/HomeRounded';

import GlobalContext from '../context/globalContext';
import ActiveIconLink from './activeIconLink';
import ToggleDark from './toggleDark';

const SlideBar = () => {
    const global = useContext(GlobalContext);

    return (
        <Drawer open anchor="left" variant="persistent" >
            <ActiveIconLink children={<HomeIcon />} href="/" />
            <ActiveIconLink children={<AlternateEmailIcon />} href="/contact" />
            <ToggleDark children={[<Brightness7Icon />, <Brightness4Icon />]} context={global} />
        </Drawer >
    );
};

export default SlideBar;