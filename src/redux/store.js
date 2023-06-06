import {combineReducers, configureStore} from "@reduxjs/toolkit";


import {genreReducer, movieReducer} from "./slice";

let rootReducer = combineReducers({
    movies: movieReducer,
    genre: genreReducer

})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}