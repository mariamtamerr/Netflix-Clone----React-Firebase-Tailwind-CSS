import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Rows = ({title, fetchURL}) => {

    const [movies, setMovies] = useState([])
   

    useEffect(()=> {
        axios.get(fetchURL).then(response=>{
        
            setMovies(response.data.results)

        } )
    }, [fetchURL] )


  return (
    <>

 <h2 className='text-white text-2xl md:text-2xl p-4 font-bold '>{title}</h2> 

<div className='flex  text-white  items-center font-bold text-xl justify-between w-full '>
    
    <div id={'slider'} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth  scrollbar-hide relative'>
         { movies.map((item, id)=> (

           <Movie item={item} key={id} />
        )
        ) }
    </div>
</div>
    </>
  )
}

export default Rows
