export default (state, action) => {
   switch (action.type) {

      case 'SET_PAGE':
         return {
            ...state,
            page: action.payload
         }

      case 'SET_SEARCH_VALUE':
         return {
            ...state,
            searchValue: action.payload
         }
      case 'ADD_MOVIE_TO_WATCHLIST':
         return {
            ...state,
            watchlist: [action.payload, ...state.watchlist]
         }
      case 'REMOVE_MOVIE_FROM_WATCHLIST':
         return {
            ...state,
            watchlist: state.watchlist.filter(
               movie => movie.imdbID !== action.payload)
         }
      case 'ADD_MOVIE_TO_WATCHED':
         return {
            ...state,
            watched: [action.payload, ...state.watched]
         }
      case 'MOVE_TO_WATCHLIST':
         return {
            ...state,
            watched: state.watched.filter(
               movie => movie.imdbID !== action.payload.imdbID),
            watchlist: [action.payload, ...state.watchlist]
         }
      case 'REMOVE_FROM_WATCHED':
         return {
            ...state,
            watched: state.watched.filter(
               movie => movie.imdbID !== action.payload)
         }
      default:
         return state;
   }
}