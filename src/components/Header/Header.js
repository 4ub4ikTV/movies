import React from 'react';


import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {UserInfo} from "../UserInfo/UserInfo";
import {Logo} from "../Logo/Logo";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>

            <div className={css.ThemeSwitch}><ThemeSwitch/></div>

            <div className={css.Logo}><Logo/></div>

            <div className={css.UserInfo}><UserInfo/></div>
        </div>
    );
};

export {Header};