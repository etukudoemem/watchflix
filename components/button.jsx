"use client"

import { authContext } from "@/lib/AuthProvider"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export const Button = ({ style, type, button, children }) => {
    const { signUserOut } = useContext(authContext)
    const router = useRouter()
    
    const handleOnClick = () => {
        if (button === "back") {
            router.back()
        }
        if (button === "getStarted") {
            router.push("/signup")
        }
        if (button === "signin") {
            router.push("/login")
        }
        if (button === "signout") {
            signUserOut()
        }
    }

    return(
        <>
            <button className={`${style}`} onClick={handleOnClick} type={type}>
                <span className="flex items-center justify-center gap-x-2">
                    {children}
                </span>
            </button>  
        </>
    )
}