import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import {movieAction} from "../../redux";
import {movieService} from "../../services";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieDetailsInfo} from "../MovieDetailsInfo/MovieDetailsInfo";
import css from './MovieDetails.module.css'

const MovieDetails = () => {

    const {movieID: id} = useParams();

    const navigate = useNavigate();

    const {movieDetails, loading, errors} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [key, setKey] = useState();

    useEffect(() => {
        dispatch(movieAction.getById({id}))
    }, [dispatch, id])

    useEffect(() => {
        movieService.getVideos(id).then(({data}) => setKey(data.results[0].key))
    }, [])

    return (
        <div>
            <button onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faClose}/>
            </button>

            {loading &&
                <div>
                    <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
                         alt="loading..."/>
                </div>
            }

            {errors &&
                <div>
                    {errors.status_message}
                </div>
            }

            <div className={css.DetailInfo}>

                <h1>{movieDetails.title}</h1>

                <div className={css.DetailVideoPost}>

                    <div>
                        {
                            movieDetails.poster_path ?
                                <PosterPreview
                                    movieTitle={movieDetails.title}>{movieDetails.poster_path}</PosterPreview> :
                                <div>No photo</div>
                        }
                    </div>

                    <MovieDetailsInfo movieDetails={movieDetails}/>
                </div>

                <div>
                    <h3>Description</h3>
                    <div>{movieDetails.overview}</div>
                </div>

                <div className={css.VideoDetails}>
                    <iframe src={`https://www.youtube.com/embed/${key}`} key={id} className={css.Video}
                            title={'detail-video'}></iframe>
                </div>

            </div>
        </div>
    );
};

export {MovieDetails};