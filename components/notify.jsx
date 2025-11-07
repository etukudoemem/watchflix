import { authContext } from "@/lib/AuthProvider"
import { useContext } from "react"

export const Notify = () => {
    const { notify, setNotify } = useContext(authContext)
    return(
        <div className={`bg-black/70 w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[14%] h-auto p-4 rounded-full flex justify-center 
            font-semibold text-sm tracking-wider transition-all duration-500 ease-in-out text-red-500 border-1 border-red-500 
            ${notify ? "translate-y-0" : "translate-y-10 opacity-0"}`}>
            <p>
                Request failed!
            </p>
        </div>
    )
}