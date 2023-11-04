import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { signOut } from '@firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  const {user, logout } = UserAuth()
  console.log("user is : " , user );
  console.log( "user id  { UID } is : " , user?.uid) 
  console.log("User Email is : " , user?.email)
 
  const navigate = useNavigate();

  const handleLogout = () => {
      // signOut(auth)
      logout()
      .then( () => {
          // signout successful 
          navigate("/");
          console.log("Signed Out Successfully");
      }).catch( (error) => {
          console.log(error);
      }); 
  }





  return (
    <div>
      

 <div className='Navbar flex items-center justify-between p-4 px-6 z-[100] w-full absolute'>
    <Link to='/'>
     <h1 className='text-red-600 text-4xl font-bold '  >NETFLIX</h1>
    </Link>

{
  user?.email?  (
    <div>
        <Link to='/account'>
          <button className='text-white pr-4' >Account</button>
        </Link>
          <button onClick={handleLogout} className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer'>Logout</button>
    </div>
  ):  (
     <div>
        <Link to='/signup'>
          <button className='text-white pr-4' >Sign Up</button>
        </Link>

        <Link to='/login'>
          <button className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer'>Login</button>
        </Link>
    
    </div>
  )

}
   
</div>



    </div>
  )
}

export default Navbar
