import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logout } = UserAuth()
  console.log("user is : " 
                  ,user ,
                  "---------------------" ,
                   "user id is : " , user.uid ); 

  return (
    <div>
      

 <div className='Navbar flex items-center justify-between p-4 px-6 z-[100] w-full absolute'>
    <Link to='/'>
     <h1 className='text-red-600 text-4xl font-bold '  >NETFLIX</h1>
    </Link>

    <div>
      <Link to='/signup'>
        <button className='text-white pr-4' >Sign Up</button>
      </Link>

      <Link to='/login'>
        <button className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer'>Login</button>
      </Link>
    
    </div>
</div>



    </div>
  )
}

export default Navbar
