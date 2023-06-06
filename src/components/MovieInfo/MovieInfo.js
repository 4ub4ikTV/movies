import React from 'react';


import css from './MovieInfo.module.css'

const MovieInfo = ({movie}) => {
    return (
        <div className={css.Movie_title}>
            {movie.title}
        </div>
    );
};

export {MovieInfo};