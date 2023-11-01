import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()


export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function signUp(email,password){
        return createUserWithEmailAndPassword(email,password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    // useEffect so it only mounts once
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    })
   
    return (
        <AuthContext.Provider value={{user, signUp, login, logout}}>
            {children}
        </AuthContext.Provider>

    )

}


export function UserAuth() {
    return useContext(AuthContext)
}