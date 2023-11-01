import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)


  return (
    <div className=' text-white relative inline-block  w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[250px] my-4 mx-1 '>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} />
    <div className='w-full absolute top-0 left-0 h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
        <p className='white-space-normal absolute top-[6rem] left-4 text-xs md:text-sm font-bold'>
            {item?.title}
        </p>
        <p>
            {like? <FaHeart className=' absolute top-2  text-gray-300'/> : <FaRegHeart className='absolute top-2 right-0 text-gray-300'/> }
        </p>

    </div>
</div>

  )
}

export default Movie
