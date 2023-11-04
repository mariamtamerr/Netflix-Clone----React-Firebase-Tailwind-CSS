import { onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase'

const Account = ({home}) => {

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid: " + uid);
      } else { 
        // user is signed out
        console.log("user is logged out");
      }
    }) ; 
  } , [ ] )
  return (
    <div>
      {home}
    </div>
  )
}

export default Account
