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

    <div className=' font-bold  '>
        <img className='w-full h-[600px] object-cover' src={`https://image.tmdb.org/t/p/original${changingMovie?.backdrop_path}`} alt={changingMovie?.title}/>
        <div className='content lg:-mt-9 -mt-16 p-4 px-6 absolute top-[15rem] '>
        <h1 className='text-white text-5xl my-[20px] font-bold' style={{marginBottom: "2rem"}}>{changingMovie?.title}</h1>
        <div className='buttons  cursor-pointer mb-7 my-4'>
            <a className='bg-gray-100 p-2 px-6 font-normal my-[20px] text-2xl '>Play</a>
            <a className='text-gray-500 my-[20px] p-2 px-5 text-2xl font-sans font-normal ml-4 hover:text-white hover:bg-gray-500' style={{border: "2px solid gray"}}>Watch Later</a>
        </div>
        <p className='text-gray-400 text-[1.1rem] mb-4'>Release Date :  {changingMovie?.release_date}</p>
        <p className='text-white text-xl  font-normal '>{changingMovie?.overview.substring(0,170)}</p>
        </div>
    </div>

      
    </>
  )
}

export default Top
