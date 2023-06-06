import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import css from './MovieSlider.module.css'
import './MovieSlider.css'

const MovieSlider = ({movie}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };

    return (
        <div className={css.Container}>
            <h3 className={css.SliderName}>Popular Movies</h3>
            <Slider {...settings}>
                {movie.map((popular) => (
                    <div key={popular.id}>
                        <img
                            className={css.Img}
                            src={`https://image.tmdb.org/t/p/w300${popular.poster_path}`}
                            alt="MovieImg"
                        />
                        <div className={css.ImgTextSlider}>{popular.title}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export {
    MovieSlider
};


