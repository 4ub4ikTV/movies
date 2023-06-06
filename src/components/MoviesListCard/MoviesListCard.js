import React from 'react';
import {useNavigate} from "react-router-dom";


import css from './MovieListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {

    const navigate = useNavigate();

    return (
        <div className={css.MovieCard} onClick={() => navigate(`/movies/${movie.id}`)}>


            {movie.poster_path ? <PosterPreview movieTitle={movie.title}>{movie.poster_path}</PosterPreview> :

                <div>no photo</div>}

            <StarsRating>{movie.vote_average}</StarsRating>

            <div>
                <MovieInfo movie={{...movie}}/>

                <GenreBadge>{movie.genre_ids}</GenreBadge>
            </div>
        </div>
    );
};

export {MoviesListCard};