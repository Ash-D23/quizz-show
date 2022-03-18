import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const auth = useAuth()

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

// hook

const useAuth = () => {
    const [user, setuser] = useState(null)

    useEffect(()=>{
        // check local storage and set user
    }, [])

    const signin = () => {
        setuser("bruce wayne")
    }

    const signout = () => {
        setuser(null)
    }

    return { user, signin, signout}
}

export {AuthContext, useAuthContext, AuthProvider}