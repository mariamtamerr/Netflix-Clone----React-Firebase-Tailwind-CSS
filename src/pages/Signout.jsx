import { signOut } from '@firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const Signout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
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

      <button className='text-blue-700 m-[10rem] bg-white p-4 rounded' onClick={handleLogout}>
                        Logout
     </button>
    
    </div>
  )
}

export default Signout
