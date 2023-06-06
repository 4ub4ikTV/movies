import React from 'react';


import {MovieDetails} from "../../components";
import css from './MovieDetailPage.module.css'

const MovieDetailPage = () => {
    return (
        <div className={css.DetailsContainer}>
            <MovieDetails/>
        </div>
    );
};

export {
    MovieDetailPage
};