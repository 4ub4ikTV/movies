import {apiService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getMovies: (page = 1, genre = '') => apiService.get(urls.movies, {params: {page, with_genres: genre}}),
    searchMovie: (query = '', page = 1) => apiService.get(urls.search, {params: {query, page}}),
    getGenre: () => apiService.get(urls.genres),
    getById: (id)=>apiService.get(`${urls.movie}/${id}&append_to_response=videos`),
    getPopular: () => apiService.get(urls.popular),
    getVideos: (id) => apiService.get(`${urls.movie}/${id}/videos`)
}

export {
    movieService
}