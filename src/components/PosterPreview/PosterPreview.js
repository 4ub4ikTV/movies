import React from 'react';


import css from './PosterPreview.module.css'

const PosterPreview = ({children, movieTitle}) => {
    return (
        <div className={css.Poster}>
            <img src={`https://image.tmdb.org/t/p/w300${children}`} alt={movieTitle} className={css.PosterImg}/>
        </div>
    );
};

export {PosterPreview};