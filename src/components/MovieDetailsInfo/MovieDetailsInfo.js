import React from 'react';


import css from './MovieDetailsInfo.module.css'


const MovieDetailsInfo = ({movieDetails}) => {

    const {production_companies, production_countries, genres} = movieDetails;

    return (
        <div className={css.ContainerInfo}>
            <div>
                <span>Rating: </span>
                {movieDetails.vote_average}
                ({movieDetails.vote_count})
            </div>
            {
                movieDetails.tagline ?
                    <div>
                        <span>Tagline: </span>
                        «{movieDetails.tagline}»
                    </div>
                    :
                    <></>
            }

            <div>
                <span>Release: </span>
                {movieDetails.release_date}
            </div>

            {
                genres && genres.length !== 0 ?
                    <div className={css.PInfo}>
                        <span>Genres: </span>


                        {movieDetails.genres.map(genre =>
                            <div key={genre.id}>{genre.name}. </div>)}
                    </div> :
                    <></>
            }

            <div>
                <span>Runtime: </span>
                {movieDetails.runtime} min.
            </div>


            {
                movieDetails.budget !== 0 ?

                    <div>
                        <span>Budget: </span>
                        {movieDetails.budget}$
                    </div>

                    :
                    <></>
            }
            {
                production_countries && production_countries.length !== 0 ?

                    <div className={css.PInfo}>
                        <span>Countries: </span>
                        {production_countries.map((country, index) =>
                            <div key={index}>{country.name}</div>)}
                    </div>


                    :
                    <></>
            }
            {
                production_companies && production_companies.length !== 0 ?

                    <div className={css.PInfo}>
                        <span>Production Companies: </span>
                        {production_companies.map(company =>
                            <div key={company.id}>{company.name}</div>)}
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export {
    MovieDetailsInfo
};