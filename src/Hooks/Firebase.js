import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Pages/Login/Firebase/Firebase.init";


initialize()
const useFirebase=()=>{
     
const [user,setUsers]=useState({})
const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()


    const signInGoogle=()=>{
        const googleProvider=new GoogleAuthProvider()
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUsers(result.user)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            
        })
        .finally(()=>{
           setIsLoading(false) 
        })
    }

  useEffect(()=>{
      const unsubscribed=onAuthStateChanged(auth,user=>{
          if(user){
              setUsers(user)
          }else{
              setUsers({})
          }
          setIsLoading(false)
      });

      return ()=>unsubscribed;
  },[])

    return {
      user,
      signInGoogle,
      logOut,
    }
}


export default useFirebase;