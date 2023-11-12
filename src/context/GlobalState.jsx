import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';


const initialState = {
   page: localStorage.getItem('MoviesAppPage') ? localStorage.getItem('MoviesAppPage') : 1,
   searchValue: localStorage.getItem('MoviesAppSearchValue') ? localStorage.getItem('MoviesAppSearchValue') : '',
   watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
   watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   useEffect(() => {
      localStorage.setItem('MoviesAppPage', state.page);
      localStorage.setItem('MoviesAppSearchValue', state.searchValue);
      localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
      localStorage.setItem('watched', JSON.stringify(state.watched));
   }, [state])

   const setPage = (page) => {
      dispatch({ type: 'SET_PAGE', payload: page })
   }

   const setSearchValue = (value) => {
      dispatch({ type: 'SET_SEARCH_VALUE', payload: value })
   }

   const addMovieToWatchlist = (movie) => {
      dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
   }

   const removeMovieFromWatchlist = (id) => {
      dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id })
   }

   const addMovieToWatched = (movie) => {
      dispatch({type: 'ADD_MOVIE_TO_WATCHED', payload: movie})
   }

   const moveToWatchlist = (movie) => {
      dispatch({type: 'MOVE_TO_WATCHLIST', payload: movie})
   }

   const removeFromWatched = (id) => {
      dispatch({type: 'REMOVE_FROM_WATCHED', payload: id})
   }

   return (
      <GlobalContext.Provider
         value={{
            page: state.page,
            searchValue: state.searchValue,
            watchlist: state.watchlist,
            watched: state.watched,
            fetchResults: state.fetchResults,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
            setSearchValue,
            setPage,
         }}>
         {props.children}
      </GlobalContext.Provider>
   )
}

