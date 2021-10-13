import { useContext } from "react"
import { AuthContext } from "../Contents/AuthProvider"

const useAuth=()=>{
    return useContext(AuthContext)
}

export default useAuth;