import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Account from '../pages/Account'

const Movie = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved ] = useState(false)
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}` )

    const saveShow = async () => {
      if (user?.email) {
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion( {
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        }) 
      } else {
        alert('You Must Be Logged In !')
      }
    }

  return (
    
    <div className=' text-white relative inline-block  w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[250px] my-4 mx-1 '>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} />
    <div className='w-full absolute top-0 left-0 h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
        <p className='white-space-normal absolute top-[6rem] left-4 text-xs md:text-sm font-bold'>
            {item?.title}
        </p>
        <a onClick={saveShow} className='cursor-pointer'>
            {like? <FaHeart className=' absolute top-2 right-4  text-gray-300'/> : <FaRegHeart className='absolute top-2 right-4 text-gray-300'/> }
        </a>

    </div>
    
</div>

  )
}

export default Movie
