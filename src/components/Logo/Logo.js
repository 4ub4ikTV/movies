import React from 'react';
import {useNavigate} from "react-router-dom";


import css from './Logo.module.css'

const Logo = () => {

    const navigate = useNavigate();

    return (
        <div>
            <img src="https://dtv.plus/wp-content/uploads/2020/03/ikonka-2.png" alt="hd-rezka" className={css.Hdrezka}
                 onClick={() => navigate('/')}/>
        </div>
    );
};

export {Logo};