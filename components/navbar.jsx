"use client"

import { FiSearch } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"
import { FaRegBell } from "react-icons/fa"
import { CgMenuLeft } from "react-icons/cg"
import { BsArrowLeftSquareFill } from "react-icons/bs"
import { useRef } from "react"
import Link from "next/link"

export const Navbar = () => {
    const menuRef = useRef(null)
    const handleMenu = () => {
        menuRef.current.classList.toggle("-translate-x-100")
        menuRef.current.classList.toggle("translate-x-0")
    }
    
    return( 
        <>
            <nav className="flex justify-between items-center w-full py-7 px-7">
                <section className="flex items-center gap-x-3 md:gap-x-6 lg:gap-x-12">
                    <CgMenuLeft 
                        onClick={handleMenu}
                        size={25} 
                        className="hidden md:hidden"
                    />
                    <h2 className="text-lg text-red-500 font-semibold">
                        WATCHFLIX
                    </h2>
                    <ul className="-translate-x-100 md:translate-x-0 flex flex-col md:flex-row md:justify-between py-20 md:py-0
                        md:gap-x-2 lg:gap-x-5 text-sm transition-translate duration-300 ease-in-out fixed top-0 left-0 bg-black md:bg-[inherit] z-10
                        md:static w-50 md:w-full h-full border-r-2 border-gray-900 md:border-0 hidden"
                        ref={menuRef}
                        >
                        <BsArrowLeftSquareFill size={20} className="absolute top-4 right-4 active:scale-110 duration-200 ease md:hidden" onClick={handleMenu}/>
                        <li className="px-5 py-3 hover:bg-[#333] rounded-r-full">Home</li>
                        <li className="px-5 py-3 hover:bg-[#333] rounded-r-full">TV Shows</li>
                        <li className="px-5 py-3 hover:bg-[#333] rounded-r-full">Movies</li>
                        <li className="px-5 py-3 hover:bg-[#333] rounded-r-full">New & Popular</li>
                    </ul>
                </section>
                <section className="flex gap-x-5 items-center">
                    <div className="hidden">
                        <FiSearch />
                    </div>
                    <div className="hidden">
                        <section className="flex gap-x-2 items-center text-xs">
                            John Grisham
                            <RxAvatar />
                        </section>
                    </div>
                    <div className="hidden">
                        <FaRegBell />
                    </div>
                    {/* <button className="flex items-center w-auto h-8 py-2 px-4 bg-red-500 text-white text-sm rounded-sm font-bold outline-none">
                        <Link href={"/login"}>Sign In</Link>
                    </button> */}
                </section>
            </nav>
        </>)
}