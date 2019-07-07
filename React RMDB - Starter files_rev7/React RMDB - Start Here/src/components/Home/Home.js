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
        searchTerm: ''
    }
    
    componentDidMount(){
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?apikey=${API_KEY }&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true })

        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?apikey:${API_KEY}&language=en-US&page${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?apikey:${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
            this.fetchItems(endpoint);
        }
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                movies: [...this.state.movies, ...result.results],
                heroImage: this.state.heroimage || result.results,
                loading: false,
                currentPage: result.pages,
                totalPages: result.total_pages
            })
        })
    }
    render() {
        return (
            <div className='rmdb-home'>
            {this.state.heroImage ?
            <div>
                <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}this.state.heroImage.backdrop_path`}
                title={this.state.heroImage.orginal_title}
                text={this.state.heroImage.overview}/>
                <SearchBar />
            </div> : null }
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />

            </div>
        )
    }
}

export default Home;