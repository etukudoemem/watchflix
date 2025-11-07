"use client"

import { IoArrowBackCircleOutline } from "react-icons/io5"
import { useRouter } from "next/navigation"

export const Button = () => {
    const router = useRouter()

    return(
        <span onClick={() => router.back()} className="flex items-center gap-x-2 cursor-pointer p-4">
            <IoArrowBackCircleOutline size={30} />
        </span>
    )
}