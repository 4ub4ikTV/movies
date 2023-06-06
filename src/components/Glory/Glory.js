import React from 'react';


import css from './Glory.module.css'

const Glory = () => {
    return (
        <div className={css.Glory}>
            <img src="https://static.hdrezka.ac/templates/hdrezka/images/slava.jpg" alt="ukraine"
                 className={css.GloryImg}/>
        </div>
    );
};

export {
    Glory
};