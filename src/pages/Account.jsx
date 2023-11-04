import { onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase'
import { UserAuth } from '../context/AuthContext';
import SavedShows from '../components/SavedShows';

const Account = () => {
  const { user } = UserAuth();


  return (
    <>
     
<div className='w-full h-screen text-white '>
    {/* img hidden for small devices & anything above small will be block, absolute, ... */}
        <img className=' absolute w-full h-[430px] object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/caa8a298-e83a-48e6-abb4-8fd5e9280b04/EG-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
        {/* black overlay on the whole page */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        
        <div className='shows z-10 absolute top-[35%] left-[10%] '>
          <h1 className='text-3xl md:text-5xl font-bold'>My List</h1>
  
        
          
        </div>
      
</div>

<SavedShows />
    </>
  )
}

export default Account
