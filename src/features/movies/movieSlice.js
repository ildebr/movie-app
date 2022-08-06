import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import movieApi from "../../common/apis/MovieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
import MovieApi from "../../common/apis/MovieApi"
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async()=>{
    const movieText = "Harry"
    const response = await MovieApi.get(`/?apikey=${APIKey}&s=${movieText}&type=movie&page=2`)
        return response.data
})

export const fetchAsyncSeries = createAsyncThunk('series/fetchAsyncSeries', async()=>{
    const serieText = "Friends"
    const response = await MovieApi.get(`/?apikey=${APIKey}&s=${serieText}&type=series&page=2`)
        return response.data
})

export const fetchAsyncMoviesOrSeries = createAsyncThunk('series/fetchAsyncMoviesOrSeries', async(id)=>{
    const serieText = "Friends"
    const response = await MovieApi.get(`/?apikey=${APIKey}&i=${id}&Plot=full`)
        return response.data
})


export const fetchAsyncHeader = createAsyncThunk('series/fetchAsyncHeader', async()=>{
    const serieText = "20th century women"
    console.log("shrek")
    const response = await MovieApi.get(`/?apikey=${APIKey}&t=${serieText}&type=movie`)
        return response.data
})


const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
    header: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state,{payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) =>{
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () =>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled")
            console.log(payload)
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("rejected")
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled")
            console.log(payload)
            return {...state, shows: payload}
        }, 
        [fetchAsyncMoviesOrSeries.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled")
            console.log(payload)
            return {...state, selectedMovieOrShow: payload}
        },
        [fetchAsyncHeader.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled head")
            console.log(payload)
            return {...state, header: payload}
        },
    }
});

export const {removeSelectedMovieOrShow, addMovies} = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getHeader = (state) => state.movies.header
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;