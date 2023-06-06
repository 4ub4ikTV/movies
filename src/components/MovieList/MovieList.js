import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleLeft,
    faAngleRight,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";


import css from './MovieList.module.css'
import {genreAction, movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {MovieSlider} from "../MovieSlider/MovieSlider";
import {Glory} from "../Glory/Glory";


const MovieList = () => {

    const {movies, totalPage, loading, errors} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    const {genres} = useSelector(state => state.genre);

    const [toggle, setToggle] = useState(false);

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    useEffect(() => {
        if (!query.get('query')) {
            dispatch(genreAction.getGenres())
            dispatch(movieAction.getMovies({
                page: query.get('page'),
                genre: query.get('with_genres')
            }));
        } else {
            dispatch(movieAction.search({page: query.get('page'), query: query.get('query')}))
        }
    }, [dispatch, query])

    const submit = (data) => {
        if (data.query) {
            setQuery({query: data.query, page: '1'})
        }
        reset();
    };

    const prev = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: value.get('page') - 1}));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                page: value.get('page') - 1,
                with_genres: query.get('with_genres').toString()
            }));
        } else {
            setQuery(value => ({page: value.get('page') - 1}));
        }
        window.scrollTo(0, 0);
    };

    const next = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: +value.get('page') + 1}));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                page: +value.get('page') + 1,
                with_genres: query.get('with_genres').toString(),
            }));
        } else {
            setQuery(value => ({page: +value.get('page') + 1}));
        }
        window.scrollTo(0, 0);
    };

    const toFirst = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: '1'});
        } else if (query.get('with_genres')) {
            setQuery({page: '1', with_genres: query.get('with_genres').toString()});
        } else {
            setQuery({page: '1'});
        }
        window.scrollTo(0, 0);
    };

    const toLast = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: totalPage.toString()});
        } else if (query.get('with_genres')) {
            setQuery({
                page: totalPage.toString(),
                with_genres: query.get('with_genres').toString()
            });
        } else {
            setQuery({page: '500'});
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className={css.MovieList}>

            {loading && <div><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                                  alt="loading"/></div>}

            {errors && <div>{errors.status_message}</div>}

            <div>
                <MovieSlider movie={movies}/>
            </div>

            <button className={css.Btn_genres}
                    onClick={() => setToggle(!toggle)}>{toggle ? 'CLOSE' : 'SHOW GENRES'}</button>

            <div className={css.Genres}>
                {toggle && genres.map(genre => <button className={css.GenresBtn} onClick={() => setQuery({
                    page: '1',
                    with_genres: genre.id.toString()
                })}
                                                       key={genre.id}>{genre.name}</button>)}
            </div>

            <div>
                <form onSubmit={handleSubmit(submit)}>

                    <input type="text" placeholder={'Search by name'} {...register('query')}/>

                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>

                </form>
            </div>

            <Glory/>

            {query.get('genre') ?
                <h2>{(genres.find(value => value.id === parseInt(query.get('genre'))))?.name} genre</h2> : <div></div>}

            <div className={css.Movie}> {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)} </div>


            <div className={css.Pagination}>
                <div className={css.PLeft}>
                    <button disabled={query.get('page') === '1'} onClick={toFirst}><FontAwesomeIcon
                        icon={faAngleDoubleLeft}/></button>
                    <button disabled={query.get('page') === '1'} onClick={prev}><FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                </div>

                <div>{query.get('page')}</div>

                <div className={css.PRight}>
                    <button disabled={query.get('page') === '500'} onClick={next}><FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                    <button disabled={query.get('page') === '500'} onClick={toLast}><FontAwesomeIcon
                        icon={faAngleDoubleRight}/></button>
                </div>
            </div>

        </div>
    );
};

export {MovieList};