"use client"

import { IoClose } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { useState } from "react"

export const Accordion = ({ content }) => {
    const [openAccordion, setOpenAccordion] = useState(false)
    
    const handleAccordion = () => {
        setOpenAccordion((prev) => !prev)
    }

    return(
        <>
            <section className="w-full mb-2 ">
                <div onClick={() => handleAccordion()}
                    className="w-full flex items-center justify-between bg-[#222] hover:bg-[#555] px-5 py-6 lg:py-7">
                    <h3 className="lg:text-xl">
                        {content.title}
                    </h3>
                    {openAccordion ? 
                        <IoClose size={25} /> :
                        <IoMdAdd size={25} />  
                    }
                </div>
                <p className={`w-full flex overflow-hidden bg-[#222] px-5 py-8 mt-1 tracking-wide leading-relaxed transtion-all duration-100 ease-in-out
                    ${openAccordion ? "h-auto opacity-100" : "h-0 hidden opacity-0"}`}>
                    {content.text}
                </p>
            </section>
        </>
    )
}