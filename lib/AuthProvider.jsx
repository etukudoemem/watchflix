"use client"

import { createContext, useEffect, useState } from "react"
import { getAuth, signOut } from "firebase/auth"
import { app } from "@/firebase/config"
import { useRouter } from "next/navigation"

export const authContext = createContext(null)
export const AuthProvider = ({ children }) => {
    const router = useRouter()
    
    const getUserStatus = () => {
        const status = window.localStorage.getItem("WatchflixUserStatus")
        if (status !== undefined) {
            return true
        } else {
            return false
        }
    }
    const [userStatus, setUserStatus] = useState(getUserStatus())
    const [notify, setNotify] = useState(false)
    
    const auth = getAuth(app)
    const storeUserStatus = () => {
        window.localStorage.setItem("WatchflixUserStatus", userStatus)
    }
    useEffect(() => {
        storeUserStatus()
    }, [userStatus])

    const signUserOut = () => {
        signOut(auth)
        .then(() => {
            router.push("/login")
            setUserStatus(false)
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

    const authValues = {userStatus, setUserStatus, signUserOut, notify, setNotify, notification}
    
    return <authContext.Provider value={authValues}>
        {children}
    </authContext.Provider>
}