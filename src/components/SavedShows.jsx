import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {AiOutlineClose, AiOutlineCloseCircle} from 'react-icons/ai'

const SavedShows = () => {
    const { user } = UserAuth();
    const [movies, setMovies ] = useState([])



    // useEffect( () => {
    //     onSnapshot(
    //         doc(db, 'users', `${user?.email}`, (doc) => {
    //             setMovies(doc.data()?.savedShows);
    //         })) ; 

    // }, [ user?.email ]   )

    useEffect(() => {
        if (user?.email) {
          const userDocRef = doc(db, 'users', `${user?.email}`);
      
          const unsubscribe = onSnapshot(userDocRef, (doc) => {
            if (doc.exists()) {
              setMovies(doc.data()?.savedShows);
            }
          });
        }
    }, [ user?.email] )



    const movieRef = doc(db, 'users', `${user?.email}`);

    const deleteShow = async(passedID) => {
        try {
            const result = movies.filter( (item)=>item.id !==passedID);
            await updateDoc(movieRef, {
                savedShows: result, 
            }) ;
           
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
        {/* row of saved shows */}
        {/* <h2 className='text-white text-2xl md:text-2xl p-4 font-bold '>My Shows</h2>  */}

<div className='flex absolute top-[50%] text-white  items-center font-bold text-xl justify-between w-full '>

    <div id={'slider'} className='w-full h-[full]  whitespace-nowrap overflow-x-scroll scroll-smooth  scrollbar-hide relative ml-4'>
         { movies.map((item, id)=> (

          <div key={id} className=' text-white relative inline-block  w-[130px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[170px] my-4 mx-1 '>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/w500${item?.img}`} />
    <div className='w-full absolute top-0 left-0 h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
        <p className='white-space-normal absolute top-[6rem] left-4 text-xs md:text-sm font-bold'>
            {item?.title}
        </p>
        <p onClick={()=>deleteShow(item.id)} className='absolute right-4 top-4 cursor-pointer'><AiOutlineClose/></p>
        {/* <p><AiOutlineCloseCircle/></p> */}
        
          </div>
    
</div>

        )
        ) }

        </div>
    </div>
    </>
  )
}

export default SavedShows
