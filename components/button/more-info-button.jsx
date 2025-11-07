import { HiOutlineExclamationCircle } from "react-icons/hi"


export const InfoButton = () => {

    return(
        <>
            <button className="w-[max-content] h-8 px-4 flex items-center gap-x-1 bg-gray-400/70 font-semibold text-[#222] text-xs rounded-sm">
                <HiOutlineExclamationCircle size={19}/>
                <p type="button" className="translate-y-[2px]">
                    More info
                </p>
            </button>
        </>
    )
}