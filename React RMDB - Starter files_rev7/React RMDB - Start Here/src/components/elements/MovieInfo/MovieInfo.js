import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome'; 
import MovieThumb from '../MovieThumb/MovieThumb'; 
import './MovieInfo.css';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const MovieInfo = (props) => {
    return (
        <div className="rmdb-movieinfo"
            style={{
                background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}/${props.movie.backdrop_path}')` : '#000'
            }}
        >
            <div className="rmdb-movieinfo-content">
                <div className="rmdb-movieinfo-thumb">
                    <MovieThumb
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}{props.movie.poster_path}` : './images/no_image.jpg'}
                        clickable={false}
                    />
                </div>
            </div>
        </div>
    )
};

export default MovieInfo;