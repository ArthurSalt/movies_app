import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './MoviePage.css'

export const MoviePage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function getFilmsByID() {
      try {
        const url = `https://www.omdbapi.com/?apikey=4896bdea&i=${id}`
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsByID()
  }, [])

  return (
    <>
      {movie && (
      <div className="movie_page_wrapper">
        <div className="movie_page__content">
          <div className="movie_page__img_box">
            <img src={movie.Poster} alt="poster" />
          </div>
          <div className="movie_page__info">
            <div className="movie_page__title"><h1>{movie.Title}</h1></div>
            <div className="movie_page__actors"><b>Actors:</b> {movie.Actors}</div>
            <div className="movie_page__country"><b>Country:</b> {movie.Country}</div>
            <div className="movie_page__director"><b>Director:</b> {movie.Director}</div>
            <div className="movie_page__genre"><b>Genre:</b> {movie.Genre}</div>
            <div className="movie_page__released"><b>Release Date:</b> {movie.Released}</div>
            <div className="movie_page__ratings">
              <div className="movie_page__rating__item"><b>Metascore:</b> {movie.Metascore}</div>
              <div className="movie_page__rating__item"><b>IMDB:</b> `${movie.imdbRating} (${movie.imdbVotes} votes)`</div>  
            </div>
            <div className="movie_page__plot">{movie.Plot}</div>
          </div>
        </div>
      </div>
    )}</>
)}
