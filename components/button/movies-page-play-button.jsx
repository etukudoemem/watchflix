import { FaPlay } from "react-icons/fa"

export const PlayButton = () => {

    return(
        <>
            <button className="w-[max-content] h-8 px-4 flex items-center gap-x-1 bg-white font-semibold text-[#222] text-xs rounded-sm">
                <FaPlay />
                <p className="translate-y-[1.8px]">
                    Play
                </p>
            </button>
        </>
    )
}