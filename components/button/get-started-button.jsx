"use client"

import { useRouter } from "next/navigation"
import { FaChevronRight } from "react-icons/fa"

export const GetStartedButton = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push("signup")
    }

    return(
        <>
            <div className="w-40 md:w-50 h-13 bg-red-500 flex space-x-2 justify-center items-center font-semibold tracking-wider rounded mt-2 md:mt-0">
                <button onClick={handleClick}>
                    Get Started
                </button>
                <FaChevronRight />
            </div>
        </>
    )
}