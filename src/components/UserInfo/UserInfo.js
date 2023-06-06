import React from 'react';


import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.MainUser}>
            <img src="https://www.meme-arsenal.com/memes/7386364ba3663206155ffddca8d40a9e.jpg" alt="userimg"
                 className={css.UserImg}/>
            <h3 className={'user'}>4ub4ik</h3>
            <img
                src="https://static.vecteezy.com/system/resources/previews/000/575/503/original/vector-logout-sign-icon.jpg"
                alt="log-out" className={css.Logout}/>
        </div>
    );
};

export {UserInfo};