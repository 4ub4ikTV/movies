import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";


import {movieService} from "../../services";

const initialState = {
    movies: [],
    popular: [],
    movieDetails: {},
    totalPage: 1,
    currentPages: 1,
    loading: null,
    errors: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page, genre);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(query, page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async (_, thunkApi) => {
        try {
            const {data} = await movieService.getPopular();
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);

let movieSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getMovies.fulfilled, (state, action) => {
                    state.movies = action.payload.results
                    state.errors = null
                    state.currentPages = action.payload.page
                    if (action.payload.totalPage > 500) {
                        state.totalPage = 500
                    } else {
                        state.totalPage = action.payload.totalPage
                    }
                })
                .addCase(getMovies.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(search.fulfilled, (state, action) => {
                    state.movies = action.payload.results
                    state.totalPage = action.payload.totalPage
                    state.currentPages = action.payload.page
                })
                .addCase(search.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(getById.fulfilled, (state, action) => {
                    state.movieDetails = action.payload
                })
                .addCase(getById.rejected, (state, action) => {
                    state.errors = action.payload
                })
                .addCase(getPopular.fulfilled, (state, action) => {
                    state.popular = action.payload.results;
                })
                .addMatcher(isPending(search, getById, getMovies), state => {
                    state.loading = true
                })
                .addMatcher(isRejected(search, getById, getMovies), state => {
                    state.loading = false
                })
                .addMatcher(isFulfilled(search, getById, getPopular, getMovies), state => {
                    state.loading = false
                })
    })
;

const {actions, reducer: movieReducer} = movieSlice;

const movieAction = {
    getMovies,
    search,
    getById,
    getPopular,
    ...actions
}

export {
    movieReducer,
    movieAction
}