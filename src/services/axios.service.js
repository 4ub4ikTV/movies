import axios from "axios";

import {baseURL} from "../constants";


const apiService = axios.create({baseURL})

const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjJiNGFmYzVjNzdjMzU3MWE5YjQyZDUwZmIyZGFiMyIsInN1YiI6IjY0NWY3NTVlZTNmYTJmMDE4N2I3ZmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9Cdc6zW7Umh8AxIebdq308nnRExjDK_qnDOH0Kw4_E'

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access}`
    return config
})

export {
    apiService
}