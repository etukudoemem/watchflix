"use client"

import { CgMenuLeft } from "react-icons/cg"
import { BsArrowLeftSquareFill } from "react-icons/bs"
import { BiSolidCameraMovie } from "react-icons/bi"
import { useContext, useRef } from "react"
import Link from "next/link"
import { authContext } from "@/lib/AuthProvider"
import { Logo } from "./logo"
import { Button } from "./button"

export const Navbar = () => {
    const { userStatus } = useContext(authContext)
    const menuRef = useRef(null)
    const handleMenu = () => {
        menuRef.current.classList.toggle("-translate-x-100")
        menuRef.current.classList.toggle("translate-x-0")
    }
    const style = `flex items-center justify-center w-22 md:w-28 h-8 py-3 bg-red-500 text-white text-sm rounded-sm font-bold outline-none`
    
    return( 
        <>
            <nav className="flex justify-between items-center w-full py-7 px-6 md:px-10 lg:px-30">
                <section className="w-full flex items-center justify-between gap-x-2 md:gap-x-6 lg:gap-x-12">
                    <div className="flex gap-x-3">
                        {
                            userStatus && 
                            <CgMenuLeft 
                                onClick={handleMenu}
                                size={28} 
                                className="md:hidden"
                            />
                        }
                        <Logo />
                    </div>
                    <ul className="-translate-x-100 md:translate-x-0 flex flex-col md:flex-row md:justify-between pr-2 py-20 md:py-0
                        md:gap-x-2 lg:gap-x-5 text-sm transition-translate duration-300 ease-in-out fixed top-0 left-0 bg-black md:bg-[inherit] z-100
                        md:static w-50 md:w-full h-170 md:h-20 border-r-2 border-gray-900 md:border-0"
                        ref={menuRef}
                        >
                        <BsArrowLeftSquareFill 
                            size={20} 
                            className="absolute top-4 right-4 active:scale-110 duration-200 ease md:hidden" 
                            onClick={handleMenu}
                        />
                        {
                            userStatus && 
                            <Link href={"/movies"} className="flex items-center gap-x-2 px-4 hover:bg-[#333] md:hover:bg-[inherit] rounded-r-full">
                                <BiSolidCameraMovie size={20} className="md:hidden"/>
                                <li className="text-lg sm:text-md md:text-base translate-y-[2.5px]">Movies</li>
                            </Link>
                        }
                    </ul>
                    {
                        userStatus ? 
                        <Button style={style} type={"button"} button={"signout"}>
                            Sign Out
                        </Button> :
                        <Button style={style} type={"button"} button={"signin"}>
                            Sign In
                        </Button>
                    }
                </section>
            </nav>
        </>)
}