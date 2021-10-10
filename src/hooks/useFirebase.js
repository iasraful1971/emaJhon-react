import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationFirebase from "../Firebase/Firebase.inilialize";
authenticationFirebase();


const useFirebase =() => {
    const [user , setUser] =useState({});
    const [error , setError] = useState('')

    const auth = getAuth();
    const googleProvider =new GoogleAuthProvider();

    //gooogle sign in
    const signInUsingGoogle =() => {
       return signInWithPopup(auth ,googleProvider)
     
        .catch(error => {
            setError(error.message)
        })
    }
    //log out
    const logOut =() => {
        signOut(auth).then( () => {
            setUser({})
        })
    }
    //user changed
    useEffect(() => {
        onAuthStateChanged(auth , user=> {
            if(user){
                setUser(user);
                console.log('inside ', user);
            }
        })
    }, []);
    return {
        signInUsingGoogle,
        logOut,
        user,
        error
    }
}
export default useFirebase;