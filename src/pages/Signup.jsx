import React, {  useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { UserAuth } from '../context/AuthContext'
import { doc, setDoc } from 'firebase/firestore'





const Signup = () => {

  const navigate = useNavigate();
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [error, setError] = useState('')
  const {user, signup} = UserAuth()





  const handleSubmit = async (e) => {
    e.preventDefault();
    //  signup( email, password)
   await  createUserWithEmailAndPassword(auth, email, password) ;
     setDoc(doc(db, 'users', email ) ,  {
      savedShows: []
  })
    .then( ()=> {
      navigate("/");  

        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log(user);
        //     navigate("/login")
        //     // ...
        // })
      })
      .catch( (error ) => {
          // console.log(error)
          setError(error.message);
  
      })
    }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await signup(email, password, user, auth  )
  //   .then( ()=> {
  //     navigate("/login");  

  //       // .then((userCredential) => {
  //       //     // Signed in
  //       //     const user = userCredential.user;
  //       //     console.log(user);
  //       //     navigate("/login")
  //       //     // ...
  //       // })
  //   })
  //       .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.log(errorCode, errorMessage);
  //           // ..
  //       });
 
  //   }



  return (
    <>
      
   <div className='w-full h-screen'>
      {/* img hidden for small devices & anything above small will be block, absolute, ... */}
        <img className=' absolute w-full h-[400px] object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/caa8a298-e83a-48e6-abb4-8fd5e9280b04/EG-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
        {/* black overlay on the whole page */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        
         <div className='fixed w-full z-50 px-4 py-24 '>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white' >
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold mb-4' >Sign Up</h1>
              {
                error? <p className='text-white font-semibold bg-red-400 rounded-sm p-1.5 text-center my-6'> {error}  </p> : null 
              }

      
              <form  onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
                <input onChange={(e) => setEmail(e.target.value)}
                   className='rounded mb-6 p-4 bg-gray-700 ' type='email' placeholder=' Email' autoComplete='Email' />
                <input onChange={(e)=> setPassword(e.target.value)}
                className='rounded mb-4 p-4 bg-gray-700' type='password' placeholder=' Password' autoComplete='Password' />

                <button onClick={handleSubmit} className='bg-red-600 font-bold p-3 mt-6 rounded'>Sign Up</button>
              </form>
              </div>
              <div className=' flex justtify-between items-center text-sm text-gray-600 '>
                  <p className='mx-16'><input className='mr-2' type='checkbox'/>Remember Me</p>
                  <p>Need Help?</p>
              </div>
              <p className='mt-12 mx-12'> <span className='text-gray-600 mr-2'>Already Subscribed To Netflix? </span>
              <Link to='/login'>
                 Sign In
              </Link> </p>
            </div>
        
    
          </div>

   </div>
 

    </>
  )
}
  
export default Signup
