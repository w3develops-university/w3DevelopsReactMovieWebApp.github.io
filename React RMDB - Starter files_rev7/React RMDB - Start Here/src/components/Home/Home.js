import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBth';
import './Home.css';


class Home extends Component {
    state = {
        movies: [],
        heroimage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTearm: ''
    }
    
    componentDidMount(){
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?apikey=${API_KEY }&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result)
            })
    }
    render() {
        return (
            <div className='rmdb-home'>
                <HeroImage />
                <SearchBar />
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />

            </div>
            
        )
    }
}

export default Home;