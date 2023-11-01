import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'

const Top = () => {

    const [movies, setMovies] = useState([])

    // get a random movie for the every minute changing top home page
    const changingMovie = movies[Math.floor(Math.random() * movies.length )] // img[0] or img[20] since we have an array of images and so AND   it's movies[Math.random] this is an ARRAY element [] NOT () 

    useEffect( ()=> {

        axios.get(requests.popular).then((response) => {
        // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4f2fa4e33969f039609ddec275d56387&language=en-US&page=1').then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            console.error(err)
        });
    }, [ ] )

    console.log(movies)

  return (
    <>

    <div className=''>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${changingMovie?.backdrop_path}`} alt={changingMovie?.title}/>
    </div>
      
    </>
  )
}

export default Top
