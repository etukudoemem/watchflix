"use client"

import { createContext, useEffect, useState } from "react"
import { getAuth, signOut } from "firebase/auth"
import { app } from "@/firebase/config"
import { useRouter } from "next/navigation"

export const authContext = createContext(null)
export const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const router = useRouter()
    
    const [userStatus, setUserStatus] = useState(false)
    const [notify, setNotify] = useState(false)

    const getUserStatus = () => {
        const status = window.localStorage.getItem("WatchflixUserStatus")
            status ? setUserStatus(status) : setUserStatus(false)
        }
    
    useEffect(() => {
        getUserStatus()
    }, [])

    const signUserOut = () => {
        signOut(auth)
        .then(() => {
            setUserStatus(false)
            router.push("/login")
        }) 
    }

    const notification = () => {
        const add = setTimeout(() => {
            setNotify(true)
        }, 1000)

        const remove = setTimeout(() => {
            setNotify(false)
        }, 5000)
    }

    const storeUserStatus = () => {
        window.localStorage.setItem("WatchflixUserStatus", userStatus)
    }
    
    useEffect(() => {
        storeUserStatus()
    }, [userStatus])
    
    const authValues = {userStatus, setUserStatus, signUserOut, notify, setNotify, notification}
    
    return <authContext.Provider value={authValues}>
        {children}
    </authContext.Provider>
}