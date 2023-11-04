import React from 'react'

const SavedShows = () => {
  return (
    <>
        {/* row of saved shows */}
        <h2 className='text-white text-2xl md:text-2xl p-4 font-bold '>My Shows</h2> 

<div className='flex  text-white  items-center font-bold text-xl justify-between w-full '>
    
    <div id={'slider'} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth  scrollbar-hide relative'>
         { movies.map((item, id)=> (

          <div className=' text-white relative inline-block  w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[250px] my-4 mx-1 '>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/w500${item?.img}`} />
    <div className='w-full absolute top-0 left-0 h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
        <p className='white-space-normal absolute top-[6rem] left-4 text-xs md:text-sm font-bold'>
            {item?.title}
        </p>
        
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
